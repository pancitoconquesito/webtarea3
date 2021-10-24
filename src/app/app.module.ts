import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { FormularioScreenComponent } from './screens/formulario-screen/formulario-screen.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { CardNoticiaComponent } from './components/card-noticia/card-noticia.component';
import { NoticiaActualScreenComponent } from './screens/noticia-actual-screen/noticia-actual-screen.component';
import { EnlistadorComponent } from './components/enlistador/enlistador.component';
import { CardNoticiaNeutraComponent } from './components/card-noticia-neutra/card-noticia-neutra.component';
import { CardNoticiaExtendidaComponent } from './components/card-noticia-extendida/card-noticia-extendida.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioScreenComponent,
    NoticiasScreenComponent,
    FormularioScreenComponent,
    BannerComponent,
    CardNoticiaComponent,
    NoticiaActualScreenComponent,
    EnlistadorComponent,
    CardNoticiaNeutraComponent,
    CardNoticiaExtendidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
