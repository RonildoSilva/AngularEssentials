import { Component, OnInit, Input } from '@angular/core';
import {LivrosService} from '../livros-service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [LivrosService]
})
export class ItemComponent implements OnInit {

  @Input() livro;

  livrosService: LivrosService;

  constructor(_livrosService: LivrosService) {
    this.livrosService = _livrosService;
  }

  ngOnInit(): void {
  }

  alterarSitucao(_situcacao){    
    this.livrosService.onEscolherSituacao({titulo: this.livro.titulo, situacao: _situcacao});
    console.log(_situcacao);
  }

}
