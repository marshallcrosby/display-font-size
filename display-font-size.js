/*!
    * Display Font Sizes v1.0.0
    * Plugin that makes it easy to render display font sizes.
    *
    * Copyright 2021-2022 Marshall Crosby
    * https://marshallcrosby.com
*/

window.addEventListener('DOMContentLoaded', () => {
    let fontSizeAttribute = `data-display-fs`;
    let displayFontSize = document.querySelectorAll(`[${fontSizeAttribute}]`);

    if (displayFontSize.length) {
        assignFontSize(displayFontSize);

        // Position buttons after resize
        window.addEventListener('resize', debounce(() => {
            assignFontSize(displayFontSize);
        }));

        // Render font size in px
        function assignFontSize(el) {
            for (let index = 0; index < el.length; index++) {
                let text = el[index].innerHTML;
                let textReset = text.replace(/\[(.+?)\]/g, '');
                let fontSize = Math.floor(parseInt(window.getComputedStyle(el[index], null).getPropertyValue('font-size').split('px').join('')));

                el[index].innerHTML = textReset + ' [' + fontSize + 'px]';
                el[index].removeAttribute('data-display-fs');
            }
        }

        // Debounce function (throttle window resize)
        function debounce(func) {
            let timer;

            return (event) => {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(func, 300, event);
            };
        }
    }
});