import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { LoUltimoComponent } from './pages/lo-ultimo/lo-ultimo.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { MarcasComponent } from './pages/marcas/marcas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    OfertasComponent,
    LoUltimoComponent,
    NosotrosComponent,
    InicioComponent,
    FooterComponent,
    ContactanosComponent,
    MarcasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
