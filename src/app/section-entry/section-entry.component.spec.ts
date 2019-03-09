import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEntryComponent } from './section-entry.component';

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
  
  it('should render given section header', () => {
    let headerText = "Sample Header";
    component.headerText = headerText;
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(headerText);
  })

  it('should render given section body', () => {
    let bodyText = "Sample body...";
    component.bodyText = bodyText;
    fixture.detectChanges();
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(bodyText);
  })
});
