import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class LivrosService {

    private livros = [
        {titulo: 'O Hobit', situacao: '', capa:'https://m.media-amazon.com/images/I/51S6-VeaHJL.jpg', descricao:'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, sejam eles, os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler e descobrir.'},
    
        {titulo: 'O Senhor dos Anéis, A Sociedade do Anel', situacao: '', capa:'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg', descricao:'O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. '},
    
        {titulo: 'O Senhor dos Anéis, As Duas Torres', situacao: '', capa:'https://images-na.ssl-images-amazon.com/images/I/81lQ5N0QwJL.jpg', descricao: 'O segundo volume de O Senhor dos Anéis, mais importante épico de fantasia moderno, narra os caminhos separados seguidos pelos membros da Sociedade do Anel em sua luta para deter Sauron, o Senhor Sombrio da terra de Mordor, e destruir o Um Anel, no qual está contida a maior parte do poder do tirano demoníaco imaginado por J.R.R. Tolkien. '},
    
        {titulo: 'O Senhor dos Anéis, O Retorno do Rei', situacao: '', capa:'https://images-na.ssl-images-amazon.com/images/I/71+4uDgt8JL.jpg', descricao: 'A guerra entre os Povos Livres da Terra-média e Sauron, o Senhor Sombrio da terra de Mordor, chega a seu clímax neste terceiro volume do romance O Senhor dos Anéis. As batalhas grandiosas que estão prestes a acontecer, no entanto, são apenas o pano de fundo para o verdadeiro drama: a missão quase suicida dos hobbits Frodo e Sam, que tentam destruir o Um Anel, fonte do poder de Sauron, infiltrando-se no coração do território do Inimigo. '}
      ];

    private logService: LogService;

    constructor(_logService: LogService){
        this.logService = _logService;
    }

    getLivros(situacao){
        if(situacao == 'nao-lido'){
            return this.livros.slice();
        }

        return this.livros.filter((_livro)=>{
            return _livro.situacao === situacao;
        })
    
    }

    onEscolherSituacao(_livro){
        const position = this.livros.findIndex((lv) => {
          return lv.titulo === _livro.titulo;
        })
    
        this.livros[position].situacao = _livro.situacao;
        
        console.log(this.livros);
        
        this.logService.writeLog('Mudanca de estado: ' + _livro.titulo + ' para ' + _livro.situacao);
    }
}
