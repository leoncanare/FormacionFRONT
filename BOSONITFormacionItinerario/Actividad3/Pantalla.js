class Pantalla {
    constructor(pantallaValorLinea2, pantallaValorLinea1){
        this.pantallaValorLinea1 = pantallaValorLinea1;
        this.pantallaValorLinea2 = pantallaValorLinea2;
        this.calculos = new Calculos();
        this.tipoOperacion = undefined;
        this.valorLinea1 = '';
        this.valorLinea2 = '';
        this.signos = {sumar: '+', restar: '-',dividir: '/',multiplicar: 'X',exp: '^'}
    }

    /*borrarDigito(){
        this.valorLinea1 = this.valorLinea1.toString().slice(0,-1);
        this.imprimirValores();
    }*/

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
        this.pantallaValorLinea1.textContent = this.valorLinea1;
        this.pantallaValorLinea2.textContent = `${this.valorLinea2} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorLinea2 = parseFloat(this.valorLinea2);
        const valorLinea1 = parseFloat(this.valorLinea1);

        if(isNaN(valorLinea1) || isNaN(valorLinea2)) return
        this.valorLinea1 = this.calculos[this.tipoOperacion](valorLinea1, valorLinea2);
    }

}