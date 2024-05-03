import { Injectable } from '@angular/core';
import { getFirestore, addDoc, getDoc, getDocs, doc, updateDoc, collection, query, where, deleteDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private router: Router) { }

  async crearCategoria(data: any) {
    try {
      return addDoc(collection(getFirestore(), 'Categorias'), data);
    } catch (error) {
      console.log('Error al crear categoría: ' + error);
      throw error;
    }
  }

  async actualizarCategoria(id: string, data: any) {
    try {
      return updateDoc(doc(getFirestore(), 'Categorias', id), data);
    } catch (error) {
      console.log('Error al actualizar categoría: ' + error);
      throw error;
    }
  }

  async eliminarCategoria(id: string) {
    try {
      return deleteDoc(doc(getFirestore(), 'Categorias', id));
    } catch (error) {
      console.log('Error al eliminar categoría: ' + error);
      throw error;
    }
  }

  async obtenerCategorias(): Promise<Categoria[]> {
    try {
      const categorias: Categoria[] = [];
      const querySnapshot = await getDocs(collection(getFirestore(), 'Categorias'));
      querySnapshot.forEach((doc) => {
        const categoria: Categoria = { id: doc.id, ...doc.data() as Categoria };
        categorias.push(categoria);
      });
      return categorias;
    } catch (error) {
      console.log('Error al obtener categorías: ' + error);
      throw error;
    }
  }
}

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
}
