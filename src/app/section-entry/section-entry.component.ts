import { Component, OnInit, Input } from '@angular/core';
import { SectionEntry } from './sectionentry';

@Component({
  selector: 'section-entry',
  templateUrl: './section-entry.component.html',
  styleUrls: ['./section-entry.component.scss']
})
export class SectionEntryComponent implements OnInit {

  constructor() { 
    this.sectionentry = new SectionEntry();
  }

  ngOnInit() {
  }

  @Input() sectionentry:SectionEntry
}
