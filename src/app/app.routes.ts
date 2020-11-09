import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { FotosComponent } from './fotos/fotos.component';
import { TeAmoComponent } from './te-amo/te-amo.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { MensagemFinalComponent } from './mensagem-final/mensagem-final.component';
import { MensagensComponent } from './mensagens/mensagens.component';







const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'te-amo', component: TeAmoComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'musicas', component: MusicasComponent },
    { path: 'projetos', component: ProjetosComponent},
    { path: 'mensagem', component: MensagemFinalComponent},
    { path: 'recados', component: MensagensComponent},
    { path: 'musicas', component: MusicasComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

