import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {LivrosService} from '../livros-service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [LivrosService]
})
export class ItemComponent implements OnInit {

  @Input() livro;
  @Output() situacaoEscolhida = new EventEmitter<{titulo: string, situacao: string}>();

  livrosService: LivrosService;

  constructor(_livrosService: LivrosService) {
    this.livrosService = _livrosService;
  }

  ngOnInit(): void {
  }

  //onAssign
  alterarSitucao(_situcacao){
    //this.livro.situacao = _situcacao;
    //this.situacaoEscolhida.emit({titulo: this.livro.titulo, situacao: _situcacao});
    
    this.livrosService.onEscolherSituacao({titulo: this.livro.titulo, situacao: _situcacao});

  }

}
