import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProjetoModel } from '../model/projetos-model';

@Injectable()
export class ProjetoService {
    constructor() { }

    getProjeto() {
        return this.listOfData;
    }

    listOfData: ProjetoModel[] = [
        {
            str_local: "Florianópolis-SC",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Todas as praias possiveis"
        },

        {
            str_local: "Santorini-GRE",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Todas as praias possiveis"
        },
        {
            str_local: "Bonito-MS",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Resort Paradisiaco e Águas Termais"
        },
        {
            str_local: "Estados Unidos",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Compras e Disney"
        },
        {
            str_local: "Hawaii",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Todas as praias possiveis"
        },
        {
            str_local: "Europa",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Todos os paises ate o dinheiro acabar"
        },
        {
            str_local: "Rio de Janeiro",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "Copacabana Palace",
            str_locais: "Praias e jogo do Mengão"
        },
        {
            str_local: "Fernando de Noronha",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Praia e mais praia"
        },
        {
            str_local: "Serra Gaucha",
            str_data: "A Definir",
            str_integrantes: "Eu e o Amor da minha vida",
            str_hotel: "A Definir",
            str_locais: "Chalé fofinho pra ficar coladinho"
        },
        
    ];
}
