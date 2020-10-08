const scrollEffect = (event) => {
    console.log(event);
}

const $main = document.querySelector('header');
const setScrollProgress = (progress = getScrollPercent()) => {    
    if (progress < 20) $main.classList.remove('header--scrolled');
    else $main.classList.add('header--scrolled')
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}

setScrollProgress();
document.addEventListener('scroll', () => {
    setScrollProgress();
})
