window.addEventListener('DOMContentLoaded', function () {
    let displayFontSize = document.querySelectorAll('.display-font-size');

    if (displayFontSize) {
        assignFontSize(displayFontSize);

        // Position buttons after resize
        window.addEventListener('resize', debounce( () => {
            assignFontSize(displayFontSize);
        }));

        // Render font size in px
        function assignFontSize(el) {
            for (let index = 0; index < el.length; index++) {
                let text = el[index].innerHTML;
                let textReset = text.replace(/\[(.+?)\]/g, '');
                let fontSize = Math.floor(parseInt(window.getComputedStyle(el[index], null).getPropertyValue('font-size').split('px').join('')));

                el[index].innerHTML = textReset + ' [' + fontSize + 'px]';
            }
        }

        // Debounce function (throttle window resize)
        function debounce(func) {
            let timer;

            return (event) => {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(func, 1000, event);
            };
        }
    }
});