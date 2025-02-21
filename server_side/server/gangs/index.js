let fraction = require('../fractions/class.js');
let configBallas = require('../../configs/gangs/ballas.json')
let configVagos = require('../../configs/gangs/vagos.json')
let configFamilles = require('../../configs/gangs/familles.json');
let configBloods = require('../../configs/gangs/bloods.json');
let configMarabunta = require('../../configs/gangs/marabunta.json');
let positionsZones = require('../../configs/gangs/zones.json');
let grass = require('../../configs/gangs/grass.json');

let zones = {
    ballas: [29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
    vagos: [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103],
	familles: [0,1,2,3,4,5,6,7,12,13,14,15,21,22,23],
	bloods: [8,9,10,11,16,17,18,19,20,24,25,26,27,28],
	marabunta: [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]
}
 /*
0,1,2,3
4,5,6,7,     8,9,10,11						80,81,82,83,84
12,13,14,15, 16,17,18,19,20  48,49,50,51 	85,86,87,88,89
 21,22,23,  24,25,26,27,28	 52,53,54,55	90,91,92,93,94
							 56,57,58,59	95,96,97,98,99
 29,30,31,32,33,34,35		 60,61,62,63	100,101,102,103
	36,37,38,39,40,41		 64,65,66,67
		42,43,44,45			 68,69,70,71
			46,47			 72,73,74,75
							 76,77,78,79
*/

let grasses = [];
let hireGrass = '';

let respawnGrass = ()=>{
	for(let i = 0;i<grass.length;i++){
		if(!grasses[i]){
			grasses[i] = {};
			grasses[i].hasGrow = false;
		}
		if(!grasses[i].hasGrow){
			let obj = mp.objects.new(mp.joaat('prop_bush_med_01'), grass[i]);
			obj.setVariable('grass',true);
			grasses[i].hasGrow = true;
			obj.grassId = i;
			grasses[i].obj = obj;
		}
	}
}

exports.grasses = grasses;

respawnGrass();

setInterval(()=>{
	respawnGrass();
},1800000)

mp.fractions.BALLAS = new fraction('BALLAS',[209, 115, 206,255],configBallas.rank,configBallas.vehs,configBallas.posSpawn,"gang",{
    colorZone: 0,
    defaultZones: zones.ballas,
	dimension: 16,
	interiror:new mp.Vector3(102.74342346191406,-1950.5487060546875,-43.82)
});
mp.fractions.VAGOS = new fraction('VAGOS',[209, 115, 206,255],configVagos.rank,configVagos.vehs,configVagos.posSpawn,"gang",{
    colorZone: 1,
    defaultZones: zones.vagos,
	dimension: 17,
	interiror:new mp.Vector3(102.74342346191406,-1950.5487060546875,-43.82)
});
mp.fractions.FAMILIES = new fraction('FAMILIES',[209, 115, 206,255],configFamilles.rank,configFamilles.vehs,configFamilles.posSpawn,"gang",{
    colorZone: 2,
	defaultZones: zones.familles,
	dimension: 18,
	interiror:new mp.Vector3(102.74342346191406,-1950.5487060546875,-43.82)
});
mp.fractions.BLOODS = new fraction('BLOODS',[209, 115, 206,255],configBloods.rank,configBloods.vehs,configBloods.posSpawn,"gang",{
    colorZone: 3,
	defaultZones: zones.bloods,
	dimension: 19,
	interiror:new mp.Vector3(102.74342346191406,-1950.5487060546875,-43.82)
});
mp.fractions.MARABUNTA = new fraction('MARABUNTA',[209, 115, 206,255],configMarabunta.rank,configMarabunta.vehs,configMarabunta.posSpawn,"gang",{
    colorZone: 4,
	defaultZones: zones.marabunta,
	dimension: 20,
	interiror:new mp.Vector3(102.74342346191406,-1950.5487060546875,-43.82)
});

mp.events.add({
    "GANG::MENU":(player)=>{
		let online_staff = player.fraction.getOnlineMembers().map((pl)=>{
			return {
				name: pl.name,
				rank: pl.mongoUser.fraction.rank,
				warn: pl.mongoUser.fraction.warn || 0,
			}
		})
		player.fractionEval(`
            gang_menu.online_staff = ${JSON.stringify(online_staff)};
		`)
    },
    "playerAtDeat":(player, reason, killer)=>{
        if(killer && player.fraction && killer.fraction && killer.fraction.hasGang &&  player.fraction.hasGang && player.fraction.hasCapt && (player.fraction.protectingGang == killer.fraction.forwardGang || player.fraction.forwardGang == killer.fraction.protectingGang )){
            if(player.position.dist(positionsZones[killer.fraction.indexZone].position) < 80){
                killer.fraction.captPoints += 1;
                killer.fraction.updatesPoints();
            }
        }
	},
	"GANG::GIVE_GRASS":(player,obj)=>{
		if(player.animJob)player.stopAnimation();
		player.animJob = false;
		if(hireGrass != player.fraction.name)return player.alert('Вы не арендуете землю');
		grasses[obj.grassId].hasGrow = false;
		let count = mp.getRandomInRange(1,3)/10;
		player.alert(`Вы собрали ${count}г. марихуаны`)
		player.inventory.addItem(61,count )
		obj.destroy();
	},
	"GANG::JOIN":(player)=>{
        player.dimension = player.fraction.dimension;
        player.mongoUser.fraction.hasJoinInterior = true;
        if(!player.mongoUser.$__.saving) player.mongoUser.save().catch(err => console.error(err));
    },
    "GANG::EXIT":(player)=>{
        player.dimension = 0;
        player.mongoUser.fraction.hasJoinInterior = false;
        if(!player.mongoUser.$__.saving) player.mongoUser.save().catch(err => console.error(err));
    },
})
mp.events.push({
    "GANG::START_CAPT":(player,indexZone)=>{
        if(!player.fraction)return;
        if(player.fraction.model.zones.indexOf(indexZone) != -1)return player.alert('Вы уже захватили эту зону');
        let protectingGang = findFractionZoneIndex(indexZone);
        if(!protectingGang)return player.alert('Банда не найдена')
        if(protectingGang.hasCapt || player.fraction.hasCapt)return player.alert('Захват уже происходит')
        player.fraction.captStart(protectingGang,indexZone);
    },
    "GANG::DELVE_GRASS":(player,obj)=>{
		if(hireGrass != player.fraction.name)return player.alert('Вы не арендуете землю')
		if(!player.animJob){
			player.call("GANG::DELVE_GRASS",[obj]);
			player.playScenario("WORLD_HUMAN_GARDENER_PLANT");
			player.animJob = true;
		}
	},
	"GANG::STOP_SMOKE":(player)=>{
		player.smoking = false;
		player.stopAnimation()
	}
})

let findFractionZoneIndex = (zoneIndex)=>{
    for(fraction in mp.fractions){
        if(mp.fractions[fraction].hasGang){
            if(mp.fractions[fraction].model.zones.indexOf(zoneIndex) != -1)return mp.fractions[fraction];
        }
    }
}

mp.calbackmenuv({
	"GANG::HIRE_GRASS":(player,array)=>{
		if(hireGrass == player.fraction.name)return player.alert('Вы уже арендуете землю');
		if(hireGrass != '')return player.alert('Земллю арендует '+hireGrass);
		if(!player.editmoneyCash(-500,'Аренда земли'))return;
		hireGrass = player.fraction.name;
		setTimeout(()=>{
			hireGrass = '';
		},300000)
		player.alert('Ваша банда арендует землю')

	}
})



















// let qrcode = require('qrcode');
// let otplib = require('otplib');

// let authenticator =  otplib.authenticator

// const secret = authenticator.generateSecret(); // base 32 encoded hex secret key это нужно сохранить в бд 
// const token = authenticator.generate(secret); // потом ключ секрет применить и получить цифры с аунтификатора и сравнить их с теми которые ввел пользователь 

// console.log('test',secret,token)
// const otpauth = otplib.authenticator.keyuri('Pablo Merano', 'WEST RP', secret);

// console.log(otpauth)
// qrcode.toDataURL(otpauth, (err, imageUrl) => {
//   if (err) {
//     console.log('Error with QR');
//     return;
//   }
//   console.log(imageUrl);
// });
