import { Injectable } from '@angular/core';
import { getFirestore, addDoc, getDoc, getDocs, doc, updateDoc, collection, query, where, deleteDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { uploadString, getStorage, ref, getDownloadURL } from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private route: Router,
    private storage: AngularFireStorage,
  ) { }

  // crear producto
  async crearProd(ruta: string, data: any) {
    try {
      return addDoc(collection(getFirestore(), ruta), data);
    } catch (e) {
      console.log('Error al crear producto: ' + e);
      throw e;
    }
  }

  // actualizar producto
  async actualizarProd(ruta: string, data: any) {
    try {
      return updateDoc(doc(getFirestore(), ruta), data);
    } catch (e) {
      console.log('Error al actualizar producto: ' + e);
      throw e;
    }
  }

  // eliminar producto
  async eliminarProd(ruta: string) {
    try {
      return deleteDoc(doc(getFirestore(), ruta));
    } catch (e) {
      console.log('Error al eliminar producto: ' + e);
      throw e;
    }
  }

  // buscar producto
  async obtenerProds(): Promise<Producto[]> {
    try {
      let listProd: Producto[] = [];
      const querySnapshot = await getDocs(collection(getFirestore(), "Productos"));
      querySnapshot.forEach((doc) => {
        const producto: Producto = { id: doc.id, ...doc.data() as Producto };
        listProd.push(producto);
      });
      return listProd;
    } catch (e) {
      console.log('Error al obtener producto: ' + e);
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