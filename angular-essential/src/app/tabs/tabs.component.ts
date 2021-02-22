import { Component, OnInit } from '@angular/core';
import {LivrosService} from '../livros-service';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [LivrosService]
})
export class TabsComponent implements OnInit {

  livros = [];

  situacao = 'nao-lido';

  livrosService: LivrosService;

  constructor(_livrosService: LivrosService) {
    this.livrosService = _livrosService;
  }

  ngOnInit(): void {
  }

  escolherSituacao(situacao){
    this.situacao = situacao;
  }

  getLivros(){
    this.livros = this.livrosService.getLivros(this.situacao);
    return this.livros;
  }

}
