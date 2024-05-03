import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosAdminComponent } from './pages/usuarios-admin/usuarios-admin.component';
import { ProductosAdminComponent } from './pages/productos-admin/productos-admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MarcasAdminComponent } from './pages/marcas-admin/marcas-admin.component';
import { CategoriasAdminComponent } from './pages/categorias-admin/categorias-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    NosotrosComponent,
    InicioComponent,
    FooterComponent,
    ContactanosComponent,
    MarcasComponent,
    AuthComponent,
    AdminComponent,
    UsuariosAdminComponent,
    ProductosAdminComponent,
    SidebarComponent,
    MarcasAdminComponent,
    CategoriasAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
