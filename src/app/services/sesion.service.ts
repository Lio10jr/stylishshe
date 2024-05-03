import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private route: Router,
  ) { }
  
  // ================ Autenticacion ================
  getAuth() {
    return getAuth();
  }

  // acceder
  async acceso(email: string, password: string) {
    try {
      return signInWithEmailAndPassword(getAuth(), email, password);
    } catch (e) {
      console.log('Error al iniciar sesion: ' + e);
      throw e;
    }
  }

  // cerrar sesion
  async cerrarSesion() {
    try {
      getAuth().signOut();
      localStorage.removeItem('user');
      this.route.navigate(['inicio']);
    } catch (e) {
      console.log('Error al cerrar sesion: ' + e);
      throw e;
    }
  }
}
