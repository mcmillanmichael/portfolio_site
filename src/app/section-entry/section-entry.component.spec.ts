import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SectionEntryComponent } from '../section-entry/section-entry.component';
import { SectionEntry } from './sectionentry';

describe('SectionEntryComponent', () => {
  let component: SectionEntryComponent;
  let fixture: ComponentFixture<SectionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set bodyText property to given text', () => {
    let bodyText = "Sample body..."
    component.sectionentry.bodyText = bodyText;
    expect(component.sectionentry.bodyText).toBe(bodyText);
  })

  it('should render given section header', () => {
    let headerText = "Sample Header";
    component.sectionentry.headerText = headerText;
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(headerText);
  })

  it('should render given section body', () => {
    let bodyText = "Sample body...";
    component.sectionentry.bodyText = bodyText;
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(bodyText);
  })
  
  // select by ID example
  //*********************
  // const section = fixture.debugElement.query(By.css('#sectionBody')).nativeElement;
  // expect(section.textContent).toContain(bodyText);
});
