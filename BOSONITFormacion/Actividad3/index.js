const displayValorLinea1 = document.getElementById('linea1');
const displayValorLinea2 = document.getElementById('linea2');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorLinea1, displayValorLinea2);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value)
    )
});