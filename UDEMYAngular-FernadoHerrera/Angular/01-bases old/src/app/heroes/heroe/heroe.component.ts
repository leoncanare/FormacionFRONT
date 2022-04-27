import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroesComponent{

    nombre: string = 'IronMan';
    edad: number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obteneNombre(): string{
        return `${this.nombre} - ${this.edad}`; 
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';

    }

    cambiarEdad(): void{
        this.edad = 30;
    }
}