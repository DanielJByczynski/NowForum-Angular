import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have correct page title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(AppSettings.pageTitle);
  });

  it('should render app-submission-list element', () => {    
    let fixture = TestBed.createComponent(AppComponent);
    let submissionList = fixture.nativeElement.querySelector('app-submission-list');
    fixture.detectChanges();
    expect(submissionList).toBeTruthy();
  });
});
