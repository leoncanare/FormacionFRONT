import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'Dc-Comics',
      desc: 'Dc-Comics',
    },
    {
      id: 'Marvel-Comics',
      desc: 'Marvel-Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    //[INFO] Saber la ruta activa y poder trabajar con ella.
    private activatedRoute: ActivatedRoute,
    //[INFO] Poder manejar la navegacion en una funcion y redireccionar.
    private router: Router,
    //[INFO] Servidio snackbar muestra por pantalla un mensaje al realizar una acción.
    private _snackBar: MatSnackBar,
    //[INFO] Genera un dialog antes de concluir una aaccion en nuestro casoa la borrar un heroe.
    public dialog: MatDialog
  ) {}

  // [INFO] Este codigo en nuestro ngOnInit se subscribe a la informacion del heroe que tratamos de editar, lo hace descomponiendo nuestra url y sacando de ahi el id, lo pasa a la funcion de nuestro servidor de getheroid y nos subscribimos a dicha informacion igualandola a nuestro heroe vacio de nuestro formulario.

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroesId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }
  // [INFO] Nuestra funcion de guaradar marca como necesario que almenos el nombre contenga 1 cracter si esto se cumple retorna el objeto heroe relleno con los que hayamos modificado en nuestro formulario.
  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    // [INFO] Si nuestro heroe contiene un id definido actualiza la bd con el id indicado enb el caso de que no esxista en nuestra bd crea un heroe NumberValueAccessor. Nuestro susbscribe de mas abajo cambia la ruta del navegador de /heroes/agragar a /heroes/editar/:id ya que el heroe ya a sido creado.
    if (this.heroe.id) {
      this.heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) => this.mostrarSnakbar('Registro actualizado'));
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnakbar('Registro creado');
      });
    }
  }
  // [INFO] En este caso seleccionamos la funcion creada borrarHeroe en nuestro servidor para borrar por id y con nuestro router redirigir la usuario a nuestro listado de heroes.
  borrar() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe,
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this.heroesService.borrarHeroe(this.heroe.id!).subscribe((resp) => {
          this.router.navigate(['/heroes']);
        });
      }
    });
  }

  mostrarSnakbar(mensaje: string) {
    this._snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
