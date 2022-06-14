// EJERCICIO "CINE"

/* 
•Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay
•Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
•La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
•La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada
*/

let cantidadButacas: number = Number(
  prompt("Por favor, ingrese la cantidad total de butacas:")
);
let contador: number = 0;

let butacasCine: boolean[] = new Array(cantidadButacas);

for (let i: number = 0; i < cantidadButacas; i++) {
  butacasCine[i] = Boolean(
    prompt(`¿La butaca número: ${i + 1} está disponible? 
  SI: presione tecla "Enter"
  NO: escriba "NO"`)
  );
  if (butacasCine[i] === false) {
    contador = contador + 1;
  }
}

console.log(butacasCine);
console.log("Cantidad de butacas DISPONIBLES:", contador);
console.log("Cantidad de butacas OCUPADAS:", cantidadButacas - contador);
