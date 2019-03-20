import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SectionEntry } from './section-entry/sectionentry';
import { SectionEntryComponent } from './section-entry/section-entry.component';

describe('AppComponent', () => {
  
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent, SectionEntryComponent
      ],
    }).compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Michael McMillan'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Michael McMillan');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Michael McMillan');
  });
  
  it('should increment sectionentries length when an section is added.', () => {
    let entry = <SectionEntry> {
      headerText : "Foo",
      bodyText: "Bar"
    }
    component.sectionentries.push(entry);
    expect(component.sectionentries.length).toBe(1);
  });

  it('should render sectionentries header', () => {
    let entry = <SectionEntry> {
      headerText : "Foo",
      bodyText: "Bar"
    }
    component.sectionentries.push(entry);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled
        .querySelector('section-entry')
        .querySelector('h2').textContent)
      .toEqual('Foo');
  });

  it('should render sectionentries body', () => {
    let entry = <SectionEntry> {
      headerText : "Foo",
      bodyText: "Bar"
    }
    component.sectionentries.push(entry);
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled
        .querySelector('section-entry')
        .querySelector('p').textContent)
      .toEqual("Bar");
  });

});
