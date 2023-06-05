import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  @Input() message = 'valeur initalisation';
  @Input() cl = 'blue';

  @Output() msgToParent = new EventEmitter();

  sendMsg() {
    this.msgToParent.emit('Message de la part du Second Component');
  }
}
