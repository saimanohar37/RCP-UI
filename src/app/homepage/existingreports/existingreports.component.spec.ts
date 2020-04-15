import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingreportsComponent } from './existingreports.component';

describe('ExistingreportsComponent', () => {
  let component: ExistingreportsComponent;
  let fixture: ComponentFixture<ExistingreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
