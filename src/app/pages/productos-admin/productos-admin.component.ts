import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Modal } from 'flowbite';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {
  listProd: Producto[] = [];
  listCat: Categoria[] = [];
  listMarca: Marca[] = [];
  modal: Modal;
  selectedFile: File | null = null;
  idProducto = '';
  imagenProducto = '';
  isActualizar: boolean = false;
  loading: boolean = false;
  constructor(
    private servProductos: ProductosService,
    private servCategorias: CategoriasService,
    private servMarcas: MarcasService,
    private router: Router) { }

  async ngOnInit() {
    this.modal = new Modal(document.getElementById('modal'));
    try {
      this.listProd = await this.servProductos.obtenerProds();
      this.listCat = await this.servCategorias.obtenerCategorias();
      this.listMarca = await this.servMarcas.obtenerMarcas();
    } catch (e: any) {
      console.log('Error al obtener productos');
    }
  }

  productForm: FormGroup = new FormGroup({
    marca: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    precio: new FormControl(0, [Validators.required, Validators.min(1)]),
    imagen: new FormControl(null, this.isActualizar ? [] : [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });

  async crear() {
    this.productForm.get('imagen').setValidators(Validators.required);
    this.productForm.get('imagen').updateValueAndValidity();
    if (this.productForm.valid) {
      this.loading = true;
      let producto = this.productForm.value;
      producto.precio = '$' + producto.precio;

      // subir img
      let dataUrl = await this.servProductos.fileToDataUrl(this.selectedFile);
      const imagePath = `productos/${Date.now()}`;
      const imageUrl = await this.servProductos.uploadImage(imagePath, dataUrl);
      producto.imagen = imageUrl;
      this.servProductos.crearProd('Productos', producto).then((res) => {
        Swal.fire({
          title: "Producto",
          text: "Producto creado!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiar()
        this.listProd.push(producto);
        this.hideModal();
        //this.router.navigate(['productos-admin']);
      }).catch((e: any) => {
        console.log('Error: ' + e);
        Swal.fire({
          title: "Producto",
          text: "Error al crear el producto",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }).finally (() =>{
        this.loading = false;
      })
    } else {
      this.getFormErrors().forEach((err) => {
        console.log(err)
      })
      Swal.fire({
        title: "Producto",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  cargarProducto(producto: Producto) {
    this.isActualizar = true;
    this.idProducto = producto.id;
    this.imagenProducto = producto.imagen;
    delete producto.id;
    delete producto.imagen;
    this.productForm.setValue({ ...producto, imagen: producto.imagen || null });
    this.showModal();
  }

  async editar() {
    this.productForm.get('imagen').clearValidators();
    this.productForm.get('imagen').updateValueAndValidity();

    if (this.productForm.valid) {
      this.loading = true;
      let producto = this.productForm.value;
      if (producto.imagen != null) {
        // subir la imagen
        let dataUrl = await this.servProductos.fileToDataUrl(this.selectedFile);
        const imagePath = `productos/${Date.now()}`;
        const imageUrl = await this.servProductos.uploadImage(imagePath, dataUrl);
        producto.imagen = imageUrl;
      } else {
        producto.imagen = this.imagenProducto;
      }
      let path = `Productos/${this.idProducto}`
      this.servProductos.actualizarProd(path, producto).then(async (res) => {
        Swal.fire({
          title: "Producto",
          text: "Producto actualizado!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiar()
        this.listProd = [];
        this.listProd = await this.servProductos.obtenerProds();
        this.hideModal();
        this.isActualizar = false;
      }).catch((e: any) => {
        console.log('Error: ' + e);
        Swal.fire({
          title: "Producto",
          text: "Error al actualizar el producto",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }).finally (() =>{
        this.loading = false;
      });
    } else {
      this.getFormErrors().forEach((err) => {
        console.log(err)
      })
      Swal.fire({
        title: "Producto",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  eliminar(id: string) {
    let path = `Productos/${id}`
    this.servProductos.eliminarProd(path).then(async () => {
      Swal.fire({
        title: "Producto",
        text: "Producto eliminado!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      this.listProd = [];
      this.listProd = await this.servProductos.obtenerProds();

    }).catch(() => {
      Swal.fire({
        title: "Producto",
        text: "Error al eliminar el producto!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

  showModal() {
    this.modal.show();
  }

  hideModal() {
    this.isActualizar = false;
    this.limpiar()
    this.modal.hide();
  }

  limpiar() {
    this.productForm.reset();
    this.selectedFile = null;
    this.idProducto = '';
    this.imagenProducto = '';
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file && allowedTypes.includes(file.type)) {
      this.selectedFile = file;
      this.mostrarImagen();
    } else {
      Swal.fire({
        title: "Producto",
        text: "Tipo de archivo no permitido. Seleccione un archivo JPG o PNG.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  mostrarImagen(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenProducto = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  getFormErrors(): string[] {
    const errors = [];
    const controls = this.productForm.controls;
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const controlErrors = controls[key].errors;
        if (controlErrors != null) {
          errors.push(`${key}: ${JSON.stringify(controlErrors)}`);
        }
      }
    }
    return errors;
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

interface Marca {
  id: string;
  nombre: string;
  descripcion: string;
  img: string;
}

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
}
