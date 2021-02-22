import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() livro;
  @Output() situacaoEscolhida = new EventEmitter<{titulo: string, situacao: string}>();


  constructor() { }

  ngOnInit(): void {
  }

  //onAssign
  alterarSitucao(_situcacao){
    //this.livro.situacao = _situcacao;
    console.log("item: alterarSituacao");
    this.situacaoEscolhida.emit({titulo: this.livro.titulo, situacao: _situcacao});
  }

}
