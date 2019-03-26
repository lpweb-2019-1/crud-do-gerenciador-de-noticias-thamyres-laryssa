import { Component, OnInit } from '@angular/core';
import { isRegExp } from 'util';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  
  noticias = [];
  titulo= null;
  descricao= null;
  data=null;
  indicacao= null;
  categoria=null;
  tags=[];
  editoria=null;

  mostrar(noticia) {
    noticia.visivel = true;
  }
 
  salvar() {
    if(this.categoria==1)
    {
      this.categoria="Politica";
    }
      
    if(this.categoria ==2){
      this.categoria = "Economia";
    }
    if(this.categoria ==3){
      this.categoria = "Esporte";
    }
    if(this.categoria ==4){
      this.categoria = "Entretenimento";
    }


    const noticia = { 
      
      id: this.noticias.length, titulo: this.titulo, 
      descricao: this.descricao, visivel: false, data: this.data, indicacao:this.indicacao, categoria: this.categoria, tags:this.tags, editoria: this.editoria 
      
    };

    console.log("Titulo:", this.titulo, "Data:", this.data, "Indicação:", this.indicacao, "Categoria:", this.categoria, "Tags", this.tags, "Editoria", this.editoria);
    this.noticias.push(noticia);
    this.titulo = null;
    this.descricao = null;
    this.data=null;
    this.indicacao= null;
    this.categoria=null;
    this.tags=null;
    this.editoria=null;
    
   
   }

   editar(noticia){    
    this.titulo =noticia.titulo;
    this.descricao = noticia.descricao;
    this.data = noticia.data;
    this.indicacao = noticia.indicacao;
    this.categoria = noticia.categoria;
    this.tags = noticia.tags;
    this.editoria = noticia.editoria;
   }

   fechar(noticia) {
    noticia.visivel = false;
  }

  excluir(noticia){
    if (confirm("Excluir noticia "+ noticia.titulo +" ?"))
    this.noticias = this.noticias.filter(element => element.id != noticia.id)
  }
  
  constructor() { }

  ngOnInit() {
  }

  
   
}
