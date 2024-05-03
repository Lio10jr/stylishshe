import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  categorias: any[] = [];

  marcas: any[] = [];
  constructor( 
    private marcaServ: MarcasService,
    private categoriaServ: CategoriasService,
  ) {}
  async ngOnInit() {
    try {
      this.categorias = await this.categoriaServ.obtenerCategorias();
      this.marcas = await this.marcaServ.obtenerMarcas();
    } catch (error: any) {
      console.log('Error al obtener categorías:', error);
    }
  }
}
