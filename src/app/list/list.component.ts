import { Component, OnInit } from '@angular/core';

interface IFolder {
  name: string;
  updated: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public folders: IFolder[] = [
    { name: 'Jani', updated: 'yesterday' },
    { name: 'Jani', updated: 'yesterday' },
    { name: 'Jani', updated: 'yesterday' }
  ];

  public notes: IFolder[] = [
    { name: 'Jani', updated: 'yesterday' },
    { name: 'Jani', updated: 'yesterday' },
    { name: 'Jani', updated: 'yesterday' }
  ];

  public ngOnInit() {}
}
