import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productosMujer: Producto[] = [];

  constructor(
    private servProductos: ProductosService,
    private router: Router) { }
    
  async ngOnInit() {
    try {
      this.productosMujer = await this.servProductos.obtenerProds();
    } catch (e: any) {
      console.log('Error al obtener productos');
    }
  }
}

interface Producto {
  id: string;
  marca: string;
  categoria: string;
  nombre: string;
  color: string;
  precio: number;
  imagen: string;
  descripcion: string;
}
