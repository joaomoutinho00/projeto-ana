import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TrexoModel } from '../model/trexo-model';

@Injectable()
export class TrexoService {
    constructor() { }

    getTrexo() {
        return this.listOfData;
    }

    listOfData: TrexoModel[] = [
        {
            str_trexo: 'É num sorriso que o amor se faz, num abraço que se conquista, no choro que se fortalece.',
            str_autor: 'Desconhecido'
        },
        {
            str_trexo: 'Se um dia tiver que escolher entre o mundo e o amor lembre-se: se escolher o mundo ficará sem o amor, mas se escolher o amor com ele você conquistará o mundo.',
            str_autor: 'Alber Einstein'
        },
        {
            str_trexo: 'Queria saber escrever E belas rimas criar Para seu coração amolecer E você eu conquistar.',
            str_autor: 'Desconhecido'
        },
        {
            str_trexo: 'A chuva? Não doi, molha. O amor? Não se ve, se sente. Amizade? Não se compra, conquistamos. E vc? Não se esquece, guardo no meu CORAÇÃO!?',
            str_autor: 'Gilmar'
        },
        {
            str_trexo: 'Chega de saudade A realidade é que sem ela Não há paz não há beleza É só tristeza e a melancolia Que não sai de mim Não sai de mim Não sai',
            str_autor: 'Tom Jobin'
        },
        {
            str_trexo: 'Vai minha tristeza E diz a ela que sem ela não pode ser Diz-lhe numa prece Que ela regresse Porque eu não posso mais sofrer',
            str_autor: 'Tom Jobin'
        },

    ];
}
