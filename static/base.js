const preferDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

function isDarkMode() { return preferDarkScheme.matches }; (function () {
    const body = document.body
    const themeSelectorBtn = document.getElementById('theme-selector-button')
    const menuToggler = document.getElementById('navbar-toggler')
    const navbar = document.querySelector('nav.navbar')
    //FluencyCopyIcon = (window.FluencyCopyIcon || FluencyCopyIcon).trim()
    themeSelectorBtn.addEventListener('click', function () {
        let theme
        if (isDarkMode()) {
            body.classList.remove('theme-dark')
            body.classList.toggle('theme-light')
            theme = body.classList.contains('theme-light') ? 'light' : 'dark'
        } else {
            body.classList.remove('theme-light')
            body.classList.toggle('theme-dark')
            theme = body.classList.contains('theme-dark') ? 'dark' : 'light'
        }
        window.localStorage.setItem('theme', theme)
        console.log('switch to ' + theme + ' theme')
    })
    menuToggler.addEventListener('click', function () { navbar.classList.toggle('active') })
})()