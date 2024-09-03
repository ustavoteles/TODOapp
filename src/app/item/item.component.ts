import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  emEdicao = false;
  @Input() tarefa: Tarefa = new Tarefa('', false);
  @Output() removeTarefa = new EventEmitter()
}
