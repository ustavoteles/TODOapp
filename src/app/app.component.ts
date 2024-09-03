import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Tarefa } from './tarefa';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];
  apiURL: string;


  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:3000'
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.http.post<Tarefa>(`${this.apiURL}/api/post`, novaTarefa).subscribe(
      resultado => { console.log(resultado); this.READ_tarefas(); });
  }


  READ_tarefas() {
    this.http.get<Tarefa[]>(`${this.apiURL}/api/getAll`).subscribe(
      resultado => this.arrayDeTarefas = resultado);

  }

  UPDATE_tarefa(tarefaAserModificada: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserModificada)
    var id = this.arrayDeTarefas[indice]._id
    this.http.patch<Tarefa>(`${this.apiURL}/api/update/${id}`,
      tarefaAserModificada).subscribe(
        resultado => {
          console.log(resultado)
          this.READ_tarefas()
        })
  }

  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserRemovida)
    var id = this.arrayDeTarefas[indice]._id
    this.http.delete<Tarefa>(`${this.apiURL}/api/delete/${id}`).subscribe(
      resultado => {
        console.log(resultado)
        this.READ_tarefas()
      })
  }
}
