import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/services/marcas.service';
import { Modal } from 'flowbite';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marcas-admin',
  templateUrl: './marcas-admin.component.html',
  styleUrls: ['./marcas-admin.component.css']
})
export class MarcasAdminComponent implements OnInit {
  listMarcas: Marca[] = [];
  modal: Modal;
  selectedFile: File | null = null;
  idMarca = '';
  imagenMarca = '';
  isActualizar: boolean = false;
  loading: boolean = false;

  constructor(
    private marcaService: MarcasService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.modal = new Modal(document.getElementById('modal'));
    try {
      this.listMarcas = await this.marcaService.obtenerMarcas();
    } catch (error: any) {
      console.log('Error al obtener marcas:', error);
    }
  }

  marcaForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    img: new FormControl(null, this.isActualizar ? [] : [Validators.required]),
  });

  async crear() {
    if (this.marcaForm.valid) {
      this.loading = true;
      let marca = this.marcaForm.value;

      // Subir imagen si se ha seleccionado
      if (this.selectedFile) {
        let dataUrl = await this.marcaService.fileToDataUrl(this.selectedFile);
        const imagePath = `marcas/${Date.now()}`;
        const imageUrl = await this.marcaService.uploadImage(imagePath, dataUrl);
        marca.img = imageUrl;
      }

      this.marcaService.crearMarca(marca).then(async (res) => {
        Swal.fire({
          title: "Marca",
          text: "Marca creada!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiarFormulario();
        this.listMarcas = [];
        this.listMarcas = await this.marcaService.obtenerMarcas();
        this.hideModal();
      }).catch((error: any) => {
        console.error('Error al crear marca:', error);
        Swal.fire({
          title: "Marca",
          text: "Error al crear la marca",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }).finally(() => {
        this.loading = false;
      });
    } else {
      Swal.fire({
        title: "Marca",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  cargarMarca(marca: Marca) {
    this.isActualizar = true;
    this.idMarca = marca.id;
    this.imagenMarca = marca.img;
    delete marca.id;
    delete marca.img;
    this.marcaForm.setValue({ ...marca, img: marca.img || null });
    this.showModal();
  }

  async editar() {
    this.marcaForm.get('img').clearValidators();
    this.marcaForm.get('img').updateValueAndValidity();
    if (this.marcaForm.valid) {
      this.loading = true;
      let marca = this.marcaForm.value;

      // Subir la nueva imagen si se ha seleccionado
      if (this.selectedFile) {
        let dataUrl = await this.marcaService.fileToDataUrl(this.selectedFile);
        const imagePath = `marcas/${Date.now()}`;
        const imageUrl = await this.marcaService.uploadImage(imagePath, dataUrl);
        marca.img = imageUrl;
      } else {
        marca.img = this.imagenMarca; // Mantener la imagen existente
      }

      this.marcaService.actualizarMarca(this.idMarca, marca).then(async (res) => {
        Swal.fire({
          title: "Marca",
          text: "Marca actualizada!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.limpiarFormulario();
        this.listMarcas = [];
        this.listMarcas = await this.marcaService.obtenerMarcas();
        this.hideModal();
        this.isActualizar = false;
      }).catch((error: any) => {
        console.error('Error al actualizar marca:', error);
        Swal.fire({
          title: "Marca",
          text: "Error al actualizar la marca",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      }).finally(() => {
        this.loading = false;
      });
    } else {
      Swal.fire({
        title: "Marca",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  eliminar(id: string) {
    this.marcaService.eliminarMarca(id).then(async () => {
      Swal.fire({
        title: "Marca",
        text: "Marca eliminada!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      this.listMarcas = [];
      this.listMarcas = await this.marcaService.obtenerMarcas();
    }).catch((error: any) => {
      console.error('Error al eliminar marca:', error);
      Swal.fire({
        title: "Marca",
        text: "Error al eliminar la marca",
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
    this.marcaForm.reset();
    this.selectedFile = null;
    this.idMarca = '';
    this.imagenMarca = '';
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file && allowedTypes.includes(file.type)) {
      this.selectedFile = file;
      this.mostrarImagen();
    } else {
      Swal.fire({
        title: "Marca",
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
        this.imagenMarca = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

interface Marca {
  id: string;
  nombre: string;
  descripcion: string;
  img: string;
}
