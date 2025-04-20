import { Component } from '@angular/core';
import { MyButtonComponent } from "../../projects/my-library/src/lib/my-button/my-button.component";

@Component({
  selector: 'app-root',
  imports: [MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-workspace';

  onClick() {
    console.log('Button clicked!');
  }
}
