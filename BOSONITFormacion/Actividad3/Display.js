class Display {
    constructor(displayValorLinea2, displayValorLinea1){
        this.displayValorLinea1 = displayValorLinea1;
        this.displayValorLinea2 = displayValorLinea2;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorLinea1 = '';
        this.valorLinea2 = '';
        this.signos = {sumar: '+', restar: '-',dividir: '/',multiplicar: 'X',exp: '^'}
    }

    borrar(){
        this.valorLinea1 = this.valorLinea1.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorLinea1 = '';
        this.valorLinea2 = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorLinea2 = this.valorLinea1 || this.valorLinea2;
        this.valorLinea1 = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorLinea1.includes('.')) return
        this.valorLinea1 = this.valorLinea1.toString() + numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorLinea1.textContent = this.valorLinea1;
        this.displayValorLinea2.textContent = `${this.valorLinea2} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorLinea2 = parseFloat(this.valorLinea2);
        const valorLinea1 = parseFloat(this.valorLinea1);

        if(isNaN(valorLinea1) || isNaN(valorLinea2)) return
        this.valorLinea1 = this.calculadora[this.tipoOperacion](valorLinea1, valorLinea2);
    }

}