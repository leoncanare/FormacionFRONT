function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(1400);
let soyArreglo = queTipoSoy([1,2,3,4,5,6]);

let soyExplicito = queTipoSoy<number>(200);
