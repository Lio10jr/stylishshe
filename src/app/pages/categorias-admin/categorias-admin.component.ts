import { Component, OnInit } from '@angular/core';
import { Modal } from 'flowbite';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias-admin',
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.css']
})
export class CategoriasAdminComponent implements OnInit {
  listCategorias: Categoria[] = [];
  modal: Modal;
  loading: boolean = false;
  isActualizar: boolean = false;
  idCategoria = '';
  constructor(
    private categoriaService: CategoriasService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.modal = new Modal(document.getElementById('modal'));
    try {
      this.listCategorias = await this.categoriaService.obtenerCategorias();
    } catch (error: any) {
      console.log('Error al obtener categorías:', error);
    }
  }

  categoriaForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });

  async crear() {
    if (this.categoriaForm.valid) {
      this.loading = true;
      let categoria = this.categoriaForm.value;

      this.categoriaService.crearCategoria(categoria).then(async (res) => {
        Swal.fire({
          title: "Categoría",
          text: "Categoría creada!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiarFormulario();
        this.listCategorias = [];
        this.listCategorias = await this.categoriaService.obtenerCategorias();
        this.hideModal();
      }).catch((error: any) => {
        console.error('Error al crear categoría:', error);
        Swal.fire({
          title: "Categoría",
          text: "Error al crear la categoría",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }).finally(() => {
        this.loading = false;
      });
    } else {
      Swal.fire({
        title: "Categoría",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  cargarCategoria(categoria: Categoria) {
    this.isActualizar = true;
    this.idCategoria = categoria.id;
    delete categoria.id;
    this.categoriaForm.setValue(categoria);
    this.showModal();
  }

  async editar() {
    if (this.categoriaForm.valid) {
      this.loading = true;
      let categoria = this.categoriaForm.value;
      console.log(categoria)
      this.categoriaService.actualizarCategoria(this.idCategoria, categoria).then(async (res) => {
        Swal.fire({
          title: "Categoría",
          text: "Categoría actualizada!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiarFormulario();
        this.listCategorias = [];
        this.listCategorias = await this.categoriaService.obtenerCategorias();
        this.hideModal();
        this.isActualizar = false;
      }).catch((error: any) => {
        console.error('Error al actualizar categoría:', error);
        Swal.fire({
          title: "Categoría",
          text: "Error al actualizar la categoría",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }).finally(() => {
        this.loading = false;
      });
    } else {
      Swal.fire({
        title: "Categoría",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  eliminar(id: string) {
    this.categoriaService.eliminarCategoria(id).then(async () => {
      Swal.fire({
        title: "Categoría",
        text: "Categoría eliminada!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      this.listCategorias = [];
      this.listCategorias = await this.categoriaService.obtenerCategorias();
    }).catch((error: any) => {
      console.error('Error al eliminar categoría:', error);
      Swal.fire({
        title: "Categoría",
        text: "Error al eliminar la categoría",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  showModal() {
    this.modal.show();
  }

  hideModal() {
    this.isActualizar = false;
    this.limpiarFormulario();
    this.modal.hide();
  }

  limpiarFormulario() {
    this.categoriaForm.reset();
  }
}

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
}
