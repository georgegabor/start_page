import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  private readonly panelIndex$ = new BehaviorSubject<number>(-1);

  public panelToExpand(index: number) {
    this.panelIndex$.next(index);
  }

  public getPanelIndex(): Observable<number> {
    return this.panelIndex$.asObservable();
  }
}
