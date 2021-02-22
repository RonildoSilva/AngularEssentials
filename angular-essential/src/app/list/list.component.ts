import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() livros;
  @Output() situacaoEscolhida = new EventEmitter<{titulo:string, situacao:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSituacaoEscolhida(_livro){
    console.log("list: atualizaEstrutura");
    this.situacaoEscolhida.emit(_livro);
  }

}
