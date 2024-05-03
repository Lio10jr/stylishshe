import { Injectable } from '@angular/core';
import { getFirestore, addDoc, getDoc, getDocs, doc, updateDoc, collection, query, where, deleteDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { uploadString, getStorage, ref, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(
    private route: Router,
    private storage: AngularFireStorage,
  ) { }

  // crear marca
  async crearMarca(data: any) {
    try {
      return addDoc(collection(getFirestore(), 'Marcas'), data);
    } catch (e) {
      console.log('Error al crear marca: ' + e);
      throw e;
    }
  }

  // actualizar marca
  async actualizarMarca(id: string, data: any) {
    try {
      return updateDoc(doc(getFirestore(), 'Marcas', id), data);
    } catch (e) {
      console.log('Error al actualizar marca: ' + e);
      throw e;
    }
  }

  // eliminar marca
  async eliminarMarca(id: string) {
    try {
      return deleteDoc(doc(getFirestore(), 'Marcas', id));
    } catch (e) {
      console.log('Error al eliminar marca: ' + e);
      throw e;
    }
  }

  // obtener marcas
  async obtenerMarcas(): Promise<Marca[]> {
    try {
      let marcas: Marca[] = [];
      const querySnapshot = await getDocs(collection(getFirestore(), 'Marcas'));
      querySnapshot.forEach((doc) => {
        const marca: Marca = { id: doc.id, ...doc.data() as Marca };
        marcas.push(marca);
      });
      return marcas;
    } catch (e) {
      console.log('Error al obtener marcas: ' + e);
      throw e;
    }
  }

  // subir imagen a storage de firebase
  async uploadImage(path: string, data_url: string) {
    await uploadString(ref(getStorage(), path), data_url, 'data_url');
    return await getDownloadURL(ref(getStorage(), path));
  }

  async fileToDataUrl(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }
}

interface Marca {
  id: string;
  nombre: string;
  descripcion: string;
  img: string;
}
