import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PanelService } from './panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Start Page';
  public panelIndex$: Observable<number>;

  constructor(private readonly panelService: PanelService) {
    this.panelIndex$ = panelService.getPanelIndex();
  }
}
