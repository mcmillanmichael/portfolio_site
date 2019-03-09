import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-entry',
  templateUrl: './section-entry.component.html',
  styleUrls: ['./section-entry.component.scss']
})
export class SectionEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerText:string
  bodyText:string
}
