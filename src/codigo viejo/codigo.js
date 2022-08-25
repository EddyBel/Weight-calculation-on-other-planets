// Definiendo las variables html
const planetas = document.getElementById("planetas");
const peso = document.getElementById("peso");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

let planeta, pesoUsuario;

// Objeto con las gravedades de planetas en m/s^2
const astros = {
  Mercurio: {
    NOMBRE: "Mercurio",
    GRAVEDAD: 3.7,
  },
  Venus: {
    NOMBRE: "Venus",
    GRAVEDAD: 8.87,
  },
  Tierra: {
    NOMBRE: "Tierra",
    GRAVEDAD: 9.8,
  },
  Marte: {
    NOMBRE: "Marte",
    GRAVEDAD: 3.721,
  },
  Jupiter: {
    NOMBRE: "Jupiter",
    GRAVEDAD: 24.79,
  },
  Saturno: {
    NOMBRE: "Saturno",
    GRAVEDAD: 10.44,
  },
  Urano: {
    NOMBRE: "Urano",
    GRAVEDAD: 8.8,
  },
  Neptuno: {
    NOMBRE: "Neptuno",
    GRAVEDAD: 11.15,
  },
  Pluton: {
    NOMBRE: "Pluton",
    GRAVEDAD: 0.62,
  },
  Sol: {
    NOMBRE: "Sol",
    GRAVEDAD: 274,
  },
};

// Boton de ejecucion del calculo
boton.addEventListener("click", () => {
  resultado.style.opacity = 0;

  planeta = planetas.value;
  pesoUsuario = peso.value;
  if (pesoUsuario == "") {
    pesoUsuario = 0;
  }
  pesoUsuario = parseFloat(pesoUsuario);
  setTimeout(() => {
    calculoDePeso(planeta, pesoUsuario);
  }, 500)
});

// Funcion del calculo con respecto al planeta
const calculoDePeso = (planeta, peso) => {
  if (planeta == astros.mercurio.NOMBRE) {
    pesoResultante = (peso * astros.mercurio.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.mercurio.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.venus.NOMBRE) {
    pesoResultante = (peso * astros.venus.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.venus.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.tierra.NOMBRE) {
    pesoResultante = (peso * astros.tierra.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.tierra.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.marte.NOMBRE) {
    pesoResultante = (peso * astros.marte.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.marte.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.jupiter.NOMBRE) {
    pesoResultante = (peso * astros.jupiter.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.jupiter.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.saturno.NOMBRE) {
    pesoResultante = (peso * astros.saturno.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.saturno.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.urano.NOMBRE) {
    pesoResultante = (peso * astros.urano.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.urano.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.neptuno.NOMBRE) {
    pesoResultante = (peso * astros.neptuno.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.neptuno.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.pluton.NOMBRE) {
    pesoResultante = (peso * astros.pluton.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.pluton.NOMBRE;
    resultado.style.opacity = 100;
  } else if (planeta == astros.sol.NOMBRE) {
    pesoResultante = (peso * astros.sol.GRAVEDAD) / astros.tierra.GRAVEDAD;
    pesoResultante = pesoResultante.toFixed(2);
    nombrePlaneta = astros.sol.NOMBRE;
    resultado.style.opacity = 100;
  }

  resultado.innerHTML = `Tu peso es: ${peso} kg, en ${nombrePlaneta} es de: ${pesoResultante} kg`;
};
