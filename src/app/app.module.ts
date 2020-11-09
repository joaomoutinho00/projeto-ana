import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FotosComponent } from './fotos/fotos.component';
import { TeAmoComponent } from './te-amo/te-amo.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { MensagemFinalComponent } from './mensagem-final/mensagem-final.component';
import { MensagensComponent } from './mensagens/mensagens.component';

import { TrexoService } from './services/trexos-service';
import { ProjetoService } from './services/projetos-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoriaComponent,
    HeaderComponent,
    FooterComponent,
    FotosComponent,
    TeAmoComponent,
    MusicasComponent,
    ProjetosComponent,
    MensagemFinalComponent,
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [TrexoService,
    ProjetoService],

  bootstrap: [AppComponent]
})
export class AppModule { }
