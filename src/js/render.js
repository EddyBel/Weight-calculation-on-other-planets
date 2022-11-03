window.addEventListener("DOMContentLoaded", () => {
  const boxOptions = document.querySelector(".box-options-planets"); // Obtener el contendor de de las opciones

  //   Recorre la lista de astros y renderizalos en el contenedor de las opciones
  Astros.map((planet) => {
    // Crea el elemento de la opcion
    let option = document.createElement("h3"); // Crea el elemento H3
    option.setAttribute("class", "option-planet"); // Asignale una clase "option-planet"
    option.innerHTML = planet.NOMBRE; // Agregale el texto del nombre del planeta
    boxOptions.appendChild(option); // Agregalo la opcion antes creada al contenedor de las opciones
  });
});
