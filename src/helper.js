// eslint-disable-next-line import/prefer-default-export

// obtiene diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}
// calcula incrementos por marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.3;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

export function obtenerPlan(plan) {
  return plan === 'basico' ? 1.2 : 1.5;
}