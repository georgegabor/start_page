import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PanelService } from '../panel.service';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent {
  public panelIndex$: Observable<number>;

  constructor(private readonly panelService: PanelService) {
    this.panelIndex$ = panelService.getPanelIndex();
  }
}
