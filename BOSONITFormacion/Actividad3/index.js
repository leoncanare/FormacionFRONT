const pantallaValorLinea1 = document.getElementById('linea1');
const pantallaValorLinea2 = document.getElementById('linea2');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallaValorLinea1, pantallaValorLinea2);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML))
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => pantalla.computar(boton.value)
    )
});