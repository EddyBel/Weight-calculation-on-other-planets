w.addEventListener('DOMContentLoaded', () => {

    const boxOptions = document.querySelector('.box-options-planets')

    nameAstros.map((astro) => {
        boxOptions.innerHTML += `<h3 class="option-planet">${astro}</h3>`
    })
})