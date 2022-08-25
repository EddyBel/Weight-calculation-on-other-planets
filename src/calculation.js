w.addEventListener('DOMContentLoaded', () => {

    const btnPlanets = document.querySelector('.button-planets-select')
    const boxOptions = document.querySelector('.box-options-planets')
    const peso = document.getElementById('peso')
    const btnSubmit = document.getElementById('boton')
    const resultado = document.getElementById('resultado')


    let planetS;
    let newPesos;

    boxOptions.addEventListener('click', (e) => {
        if (e.target && e.target.tagName == 'H3') {
            planetS = e.target.innerHTML
            btnPlanets.innerHTML = planetS
        }
    })

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        const Peso = peso.value

        astros.map((astro) => {

            if (astro.NOMBRE === planetS) {
                newPesos = newPeso(Peso, astro.GRAVEDAD)
            }
        })

        resultado.innerHTML = `Tu peso en ${planetS} es de ${newPesos} kg`
        resultado.style.opacity = 100
    })

    function newPeso(peso, gravityS) {
        const res = peso * gravityS / 9.81
        return res.toFixed(2)
    }

})