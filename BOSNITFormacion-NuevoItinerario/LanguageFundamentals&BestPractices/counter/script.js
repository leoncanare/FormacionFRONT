//Creamos las variables que usaremos en la composicion de las funciones de nuestro contador.
let countInterval;
let countValue = 0;
let step = 1;
let speed = 1000;
let count = false;
let countUp = true;

//Establecemos una constante para cada valor de entrada selecionandolos por id y le establecemo una funcion que se llame cada vez que se cambia un valor en nuestro contador.
const setCounter = document.getElementById('setCounter');
document.getElementById('setCounter').onchange = setNumberValue;
const stepCounter = document.getElementById('stepConter');
document.getElementById('stepConter').onchange = setStepValue;

//Establecemos una constante para nuestro valor del contador selecionandolo por id y le creamos una funcion para pintar el valor.
const number = document.getElementById('counterValue');
function setNumber(number) {
    document.getElementById("counterValue").innerHTML = number;
}

//Cuando nuestro contador esta en funcionamiento deshabilitamos el boton para que funcione solo una instancia, evitando un posible bug.
function startCounter() {
    document.getElementById('start').disabled = true;
    count = true;
    countInterval = setInterval(() => {
        getInfo();
        if (countUp) {
            countValue += parseInt(step);
        } else if (!countUp) {
            countValue -= parseInt(step);
        } else {
            numValue = 0;
        }
        setNumber(countValue);
    }, speed);
}

function resetCounter() {
    countValue = 0;
    setNumber(countValue)
}

//Cuando pausamos lo habilitanmos para poder reanudar.
function stopCounter() {
    document.getElementById('start').disabled = false;
    count = false;
    clearInterval(countInterval);
    getInfo();
}

function setNumberValue() {
    let numSet = setCounter.value
    setNumber(numSet);
    countValue = parseInt(numSet)
}

function setStepValue() {
    let stepSet = stepCounter.value
    step = stepSet
}

function upCounter() {
    countUp = true;
    getInfo();
}

function downCounter() {
    countUp = false;
    getInfo();
}
//Función que pinta los datos de nuestro contador.
function getInfo() {
    document.getElementById("counterData").innerHTML =`${countValue}{"count":${count},"countUp":${countUp},"speed":${speed},"step":${step}}`;
}
