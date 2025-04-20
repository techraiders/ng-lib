import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() label: string = 'Click Me';
  @Output() click: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
