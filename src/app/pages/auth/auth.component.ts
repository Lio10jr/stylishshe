import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(
    private servSesion: SesionService,
    private router: Router
  ) {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  acceder() {
    if (this.loginForm.valid) {
      var login = this.loginForm.value;
      this.servSesion.acceso(login.email, login.password).then((res) => {
        localStorage.setItem('user', res.user.email);
        Swal.fire({
          title: "Iniciar sesión",
          text: "Ingreso exitoso",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['admin']);
      }).catch((e: any)=>{
        console.log('Error: ' + e);
        Swal.fire({
          title: "Error al iniciar sesión",
          text: "Credenciales incorrectas",
          icon: "error",
          showConfirmButton: false,
          timer: 1500
        });
      });
    } else {
      Swal.fire({
        title: "Iniciar sesión",
        text: "Ingrese campos válidos",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
