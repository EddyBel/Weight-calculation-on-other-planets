/**
 * Define el estado del contendor de opciones
 *
 * @type {boolean} Estado actual
 */
let check = false;

/** @type {Element} Boton de despliegue de opciones*/
const buttonMenu = document.querySelector(".button-planets-select");
/** @type {Element} Contenedor de la lista de opciones */
const menu = document.querySelector(".box-options-planets");

/**
 * Cambio del tamaño de y visibilidad de el elemento menu
 * @type {Function} Funcion de esconder y mostrar el menu
 * @param {Number} opacity Nivel de opacidad del elemento
 * @param {String} height Nivel de tamaño vertical del elemento
 * @return {void} No retorna nada
 */
const watchMenu = (opacity, height) => {
  menu.style.opacity = opacity;
  menu.style.height = height;
};

/**
 * Esta funcion despliega el menu de opciones
 * @type {Function} Funcion que esconde y muestra el menu de opciones
 * @return {void}
 */
const toggelOptions = () => {
  if (!check) {
    menu.style.display = "block";
    setTimeout(() => {
      watchMenu(100, "340px");
    }, 10);
    check = true; // Cambia el valor del estado a su contraria
  } else {
    watchMenu(0, "0px");
    setTimeout(() => {
      menu.style.display = "none";
    }, 500);
    check = false; // Cambia el valor del estado a su contraria
  }
};

buttonMenu.addEventListener("click", toggelOptions);
