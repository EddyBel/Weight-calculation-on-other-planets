let check = false

w.addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.button-planets-select')
    const menu = document.querySelector('.box-options-planets')

    const watchMenu = () => {
        if (!check) {
            menu.style.display = 'block'
            setTimeout(() => {
                menu.style.opacity = 100
                menu.style.height = '340px'
            }, 10)
            check = true
        } else {
            menu.style.opacity = 0
            menu.style.height = '0px'
            setTimeout(() => {
                menu.style.display = 'none'
            }, 10)
            check = false
        }
    }

    buttonMenu.addEventListener('click', watchMenu)

})