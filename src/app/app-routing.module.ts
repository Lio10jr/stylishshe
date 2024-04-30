import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { LoUltimoComponent } from './pages/lo-ultimo/lo-ultimo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';

const routes: Routes = [
  {
    path: '', // Página de inicio
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio', // Ruta para la página de productos
    component: InicioComponent // Componente de la página de productos
  },
  {
    path: 'productos', // Ruta para la página de productos
    component: ProductosComponent // Componente de la página de productos
  },
  {
    path: 'nosotros', // Ruta para la página de nosotros
    component: NosotrosComponent // Componente de la página de nosotros
  },
  {
    path: 'contactanos', // Ruta para la página de ofertas
    component: ContactanosComponent // Componente de la página de ofertas
  },
  {
    path: 'marcas', // Ruta para la página de lo último
    component: MarcasComponent // Componente de la página de lo último
  },
  {
    path: '**',
    redirectTo:'inicio'
  }
  // Puedes agregar más rutas aquí si lo necesitas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
