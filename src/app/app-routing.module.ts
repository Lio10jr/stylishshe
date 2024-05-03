import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuariosAdminComponent } from './pages/usuarios-admin/usuarios-admin.component';
import { ProductosAdminComponent } from './pages/productos-admin/productos-admin.component';
import { MarcasAdminComponent } from './pages/marcas-admin/marcas-admin.component';
import { CategoriasAdminComponent } from './pages/categorias-admin/categorias-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'contactanos',
    component: ContactanosComponent,
  },
  {
    path: 'marcas',
    component: MarcasComponent,
  },
  {
    path: 'usuarios-admin',
    component: UsuariosAdminComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'productos-admin',
    component: ProductosAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'marcas-admin',
    component: MarcasAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias-admin',
    component: CategoriasAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
