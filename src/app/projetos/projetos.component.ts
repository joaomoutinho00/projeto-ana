import { Component, OnInit } from '@angular/core';
import { ProjetoService } from '../services/projetos-service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  public data: any;

  constructor(private projeto_service: ProjetoService) { }

  ngOnInit(): void {
    this.data = this.projeto_service.getProjeto();
  }

}
