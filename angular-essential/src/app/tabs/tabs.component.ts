import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  livros = [
    {titulo: 'O Hobit', situacao: ''},
    {titulo: 'O Senhor dos Anéis, O Retorno do Rei', situacao: ''}
  ]

  situacao = 'nao-lido';

  constructor() { }

  ngOnInit(): void {
  }

  escolherSituacao(_situcacao){
    this.situacao = _situcacao;
  }

  onEscolherSituacao(_livro){
    const position = this.livros.findIndex((l) => {
      return l.titulo === _livro.titulo;
    })

    this.livros[position].situacao = _livro.situacao;
  }

  getLivros(){
    if(this.situacao == 'nao-lido'){
      return this.livros.slice();
    }

    return this.livros.filter((_livro)=>{
      return _livro.situacao === this.situacao;
    })
    
  }

}
