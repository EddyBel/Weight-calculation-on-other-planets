window.addEventListener("DOMContentLoaded", () => {
  const btnPlanets = document.querySelector(".button-planets-select");
  const boxOptions = document.querySelector(".box-options-planets");
  const weightInput = document.getElementById("peso");
  const btnSubmit = document.getElementById("boton");
  const resultado = document.getElementById("resultado");

  let planet;
  let newWeight;

  /**
   * Calcula el peso de una persona seleccionando el planeta.
   * @type {Function}
   * @param {Number} weight Peso pasado por el usuario
   * @param {Number} gravity Gravedad del planeta seleccionado
   * @returns {Number} Retorna el resultado de la operacion con dos decimales
   */
  const calculateWeight = (weight, gravity) => {
    let result = (weight * gravity) / 9.81;
    return result.toFixed(2);
  };

  /**
   * Evento de click sobre el contenedor de las lista de opciones
   * @type {Event}
   */
  boxOptions.addEventListener("click", (e) => {
    // Valida que el elemento sea un H3
    if (e.target && e.target.tagName == "H3") {
      planet = e.target.innerHTML; // Obtener el valor del elemento H3 y agregarlo a la variable planet
      btnPlanets.innerHTML = planet; // Actualizar el valor del boton de acuerdo al seleccionado
      watchMenu(0, "0px"); // Asigna el nuevo tamaño y estilo
      setTimeout(() => {
        menu.style.display = "none";
      }, 500);
      check = false; // Cambia el valor del estado a su contraria
    }
  });

  /**
   * Calcula el peso del planeta seleccionado cuando se precione el boton
   * @type {Event}
   */
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault(); // Cancela el combortamiento del formulario
    let weight = weightInput.value; // Obtener el peso alojado en el input y guardarlo en variable
    // Recorre la constante de astros
    Astros.map((astro) => {
      // Utiliza el valor que sea igual al planeta seleccionado
      if (astro.NOMBRE === planet) {
        newWeight = calculateWeight(weight, astro.GRAVEDAD); // Calcular el nuevo peso con la funcion
      }
    });

    resultado.innerHTML = `Tu peso en ${planet} es de ${newWeight} kg`; // Agregar el texto del peso al contenedor del resultado
    resultado.style.opacity = 100;
  });
});
