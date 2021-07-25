import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mtools-persona5';

  links = [
    { title: 'Eletric Chair', fragment: 'eletric-chair', dasabled: false },
    { title: 'Fusion Chart', fragment: 'fusion-chart', dasabled: true },
    { title: 'Confidances', fragment: 'confidances', dasabled: true },
    { title: 'Quiz Responses', fragment: 'quiz-responses', dasabled: true }
  ];

  constructor(public route: ActivatedRoute) {}
}
