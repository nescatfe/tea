const icon_light = '{{ index .Site.Params.switch 1 }}'
const icon_dark = '{{ index .Site.Params.switch 0 }}'
const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'

/** @type {HTMLElement} */
let toggler
/** @type {HTMLIFrameElement} */
let utterances
/** @type {HTMLIFrameElement} */
let giscus

/** @param {string} id */
export function setup_theme_switch(id) {
    if (!toggler) {
        toggler = document.getElementById(id)
    }
    toggler.innerHTML = localStorage.theme === THEME_LIGHT ? icon_light : icon_dark
    toggler.addEventListener('click', switch_theme);
}

function switch_theme() {
    const current = localStorage.getItem('theme')
    const next = current === THEME_LIGHT ? THEME_DARK : THEME_LIGHT

    switch_minima_theme(current, next)

}

/**
 * @param {string} current  
 * @param {string} next 
 */
function switch_minima_theme(current, next) {
    const { classList } = document.documentElement
    const icon = next === THEME_LIGHT ? icon_light : icon_dark;

    classList.remove(current);
    classList.add(next);
    localStorage.setItem('theme', next);
    toggler.innerHTML = icon;
}