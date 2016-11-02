import { Component, ChangeDetectionStrategy } from '@angular/core';
import counter from '../store/counter'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app works!';

  counter = counter;
}
