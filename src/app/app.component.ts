import { Component } from '@angular/core';
import { SectionEntry } from './section-entry/sectionentry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.sectionentries = new Array<SectionEntry>()
  }

  ngOnInit() {
  }

  title:string = 'Michael McMillan';
  sectionentries:Array<SectionEntry>;
}
