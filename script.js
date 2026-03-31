//while, do while, for

/*let numero = 0

while (numero <= 10){
  console.log(numero)
  numero = numero + 1
}

console.log("Saí do Laco")
(foi o que aprendemos em sala)*/

let tabuada = document.getElementById('num-tabuada')
const button = document.getElementById('button')
const divResultado = document.getElementById('divResultado')


function calcular (){
    divResultado.innerHTML =""

let contador = 0
let conta = 0

while (contador <= 10){
    conta = (tabuada.value * contador)
   
    console.log(conta)
    divResultado.innerHTML += `
        <p>${tabuada.value} x ${contador} = ${conta}
`
    contador = contador + 1
}
}

button.addEventListener("click", calcular)
