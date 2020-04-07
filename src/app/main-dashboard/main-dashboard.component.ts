import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { PanelService } from '../panel.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => [
      {
        title: 'Dimension management',
        cols: 1,
        rows: 1,
        icon: 'device_hub'
      },
      {
        title: 'FTP Engine Specification',
        cols: 1,
        rows: 1,
        icon: 'pie_chart'
      },
      {
        title: 'Allocation Engine Specification',
        cols: 1,
        rows: 1,
        icon: 'dashboard'
      },
      {
        title: 'User Management',
        cols: 1,
        rows: 1,
        icon: 'people_alt'
      }
    ])
  );

  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly panelService: PanelService) {}

  public iconClicked(index: number): void {
    this.panelService.panelToExpand(index);
  }
}
