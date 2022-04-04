class PersonaNormal{
    
    constructor(
        public nombre: string,
        public direccio: string,
    ){}
}


class Hero extends PersonaNormal{
    //alterego: string;
    //edad: number;
    //nombreReal: number;

    constructor(
        public alterego: string,
        public edad: number,
        public nombreReal: string,
    ){
        super( nombreReal, 'NY' );
    }
}

const ironMan = new Hero('IronMan', 45, 'Tony');

console.log(ironMan);