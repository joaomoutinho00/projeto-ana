import { Component, OnInit } from '@angular/core';
import { TrexoModel } from '../model/trexo-model';
import { TrexoService } from '../services/trexos-service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  trexos: TrexoModel[] = []; 
  public data :any;

  constructor(private trexo_service: TrexoService) { }

  listOfOrders: TrexoService[] = [];

  ngOnInit(): void {
    this.data = this.trexo_service.getTrexo()
      

      console.log(this.data)
  }

}
