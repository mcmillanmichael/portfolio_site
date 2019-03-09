import { Component, OnInit } from '@angular/core';
import { SectionEntryComponent } from '../section-entry/section-entry.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  headerText:string
  bodyText:string

  entries:Array<SectionEntryComponent> = new Array<SectionEntryComponent>();
}
