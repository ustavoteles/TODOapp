import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Tarefa } from './tarefa';
import { ItemComponent } from './item/item.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];

  constructor() {
    this.READ_tarefas();
  }

  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
    this.arrayDeTarefas.unshift(novaTarefa);
  }

  READ_tarefas() {
    this.arrayDeTarefas = [
      new Tarefa('Estudar Frameworks Web', false),
      new Tarefa('Comer Pizza', false),
      new Tarefa('Ajudar meus pais', false),
    ];
  }

  DELETE_tarefa (tarefaAserRemovida : Tarefa){
    this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(tarefaAserRemovida),1);
    }
}
