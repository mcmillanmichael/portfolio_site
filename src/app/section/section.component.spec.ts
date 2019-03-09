import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set text property to given text', () => {
    let bodyText = "foo"
    component.bodyText = bodyText
    expect(component.bodyText).toBe(bodyText);
  })

  it('should render given section header', () => {
    let headerText = "Sample Header";
    component.headerText = headerText;
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(headerText);
  })

  it('should render given section body', () => {
    let bodyText = "Sample body...";
    component.bodyText = bodyText;
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(bodyText);
  })
  
  // select by ID example
  //*********************
  // const section = fixture.debugElement.query(By.css('#sectionBody')).nativeElement;
  // expect(section.textContent).toContain(bodyText);
});
