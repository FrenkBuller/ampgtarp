<template>
    <div class="content flex-direction-row" id="quests">
        <div class="quests-groups">
            <div class="group active">
                <div class="group-title">Активные квесты</div>
                <div class="quests">
                    <div class="scrollable">
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest active tracking">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Клиент-фу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest tracking">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Первые деньги</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Новый друг</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Новый друг</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Новый друг</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Новый друг</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Новый друг</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                                    <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group finished">
                <div class="group-title">Завершенные квесты</div>
                <div class="quests">
                    <div class="scrollable">
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                        <div class="quest">
                            <div class="icon">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9"/>
                                    <path d="M10 12.694l-2.884 1.516.551-3.212-2.333-2.274 3.225-.469 1.442-2.922 1.442 2.922 3.225.469-2.333 2.274.551 3.212-2.884-1.516z"/>
                                </svg>
                            </div>
                            <div class="title">Устроиться на работу</div>
                            <div class="status-icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="quest-description">
            <div class="title">Клиент-фу</div>
            <div class="description">Здесь размещаем краткое описание если есть что сказать, например почему этот квест обязательно нужно выполнить, какие преимущества это даст.</div>
            <div class="quest-additional">
                <div class="tasks">
                    <div class="title">Задачи</div>
                    <div class="scrollable">
                        <div class="task-row task-finished">
                            <div class="icon">
                                <div class="bg"></div>
                                <svg viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6359 0.336542C13.1071 0.799119 13.123 1.56541 12.6714 2.0481L5.58053 9.62704C5.35763 9.86529 5.04943 10 4.72727 10C4.40511 10 4.09692 9.86529 3.87401 9.62704L0.328561 5.83757C-0.123046 5.35488 -0.107128 4.58859 0.364113 4.12602C0.835356 3.66344 1.58347 3.67974 2.03508 4.16243L4.72727 7.03992L10.9649 0.372958C11.4165 -0.109731 12.1646 -0.126035 12.6359 0.336542Z"/>
                                </svg>
                            </div>
                            <div class="title">Открыть GPS</div>
                        </div>
                        <div class="task-row">
                            <div class="icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path d="M7 0a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm-.014 2.99a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm.014 2.01a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z"/>
                                </svg>
                            </div>
                            <div class="title">Найти транспорт</div>
                        </div>
                        <div class="task-row">
                            <div class="icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path d="M7 0a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm-.014 2.99a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm.014 2.01a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2z"/>
                                </svg>
                            </div>
                            <div class="title">Доехать до паспортного стола</div>
                        </div>
                    </div>
                </div>
                <div class="rewards">
                    <div class="title">Награда</div>
                    <div class="scrollable">
                        <div class="reward-row reward-money">
                            <div class="icon">
                                <div class="bg"></div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                    <path d="M12.5 0c-6.904 0-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5 12.5-5.596 12.5-12.5-5.596-12.5-12.5-12.5zm0 2.083c5.753 0 10.417 4.664 10.417 10.417s-4.664 10.417-10.417 10.417-10.417-4.664-10.417-10.417 4.664-10.417 10.417-10.417zm-.309 3.646v1.524c-.85.085-1.53.385-2.043.897-.513.513-.769 1.169-.769 1.971 0 .465.073.865.22 1.202.152.337.361.633.627.885.271.247.593.467.968.661.375.19.821.381 1.339.576.517.195.883.41 1.097.643.218.228.328.534.328.924 0 .375-.12.676-.362.899-.242.218-.573.326-.991.326-.503 0-.891-.149-1.162-.448-.266-.304-.397-.737-.397-1.302h-2.059c0 .973.266 1.753.798 2.342.536.584 1.291.927 2.264 1.031v1.41h1.133v-1.416c.883-.09 1.576-.386 2.079-.889.503-.503.755-1.158.755-1.965 0-.432-.066-.81-.199-1.133-.133-.328-.326-.617-.578-.869-.252-.256-.56-.484-.926-.684-.366-.204-.834-.421-1.404-.649-.565-.228-.951-.449-1.16-.667-.209-.218-.313-.508-.313-.869 0-.389.108-.693.321-.911.214-.223.514-.336.903-.336.394 0 .707.142.94.427.237.28.356.706.356 1.276h2.059c0-.926-.237-1.679-.712-2.258-.475-.584-1.133-.935-1.973-1.054v-1.544z"/>
                                </svg>
                            </div>
                            <div class="value">10 000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <div class="quest-track-btn tracked">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
                            <path d="M11.5 0c2.804 0 5.485 1.431 7.984 3.781.852.802 1.624 1.658 2.302 2.514.41.517.701.923.86 1.166l.354.539-.354.539c-.159.242-.45.649-.86 1.166-.679.856-1.45 1.713-2.302 2.515-2.499 2.351-5.18 3.781-7.984 3.781-2.804 0-5.485-1.431-7.984-3.781-.852-.802-1.624-1.658-2.302-2.515-.41-.517-.7-.923-.86-1.166l-.354-.539.354-.539c.159-.242.45-.649.86-1.166.679-.856 1.45-1.713 2.302-2.514 2.499-2.351 5.18-3.781 7.984-3.781zm8.658 7.517c-.622-.784-1.328-1.569-2.104-2.298-2.152-2.024-4.39-3.219-6.554-3.219-2.164 0-4.402 1.194-6.554 3.219-.775.729-1.482 1.514-2.104 2.298l-.372.483.372.483c.622.784 1.328 1.569 2.104 2.298 2.152 2.024 4.39 3.219 6.554 3.219 2.164 0 4.402-1.194 6.554-3.219.775-.729 1.482-1.514 2.104-2.298l.372-.483-.372-.483zm-12.77.483c0 2.209 1.841 4 4.112 4s4.112-1.791 4.112-4-1.841-4-4.112-4-4.112 1.791-4.112 4zm6.168 0c0 1.105-.92 2-2.056 2-1.135 0-2.056-.895-2.056-2s.921-2 2.056-2 2.056.895 2.056 2z"/>
                        </svg>
                    </div>
                    <div class="title">Отслеживать</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
  },
  props: []
}
</script>
