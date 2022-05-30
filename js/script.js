debugger
let repetir=parseInt(prompt(`ingresa cuantas veces del 1 al 100 quieres que "Hola" se repita`));

let condicion = true;

while (condicion) {
    if (condicion==((repetir>=1) && (repetir<=100))) {
        alert(`Felicidades, se mostraran ${repetir} holas en la consola`);
        condicion=false;
    }else {
        repetir=parseInt(prompt(`ingresa nuevamente cuantas veces del 1 al 100 quieres que tu "Hola" se repita`));
    }
}
for(let i= 1;i <= repetir; i++) {
    console.log (`${i} Hola`)
}
console.log(`ciclo finalizado, tenga un buen dia`);
