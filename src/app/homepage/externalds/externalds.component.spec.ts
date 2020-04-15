import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaldsComponent } from './externalds.component';

describe('ExternaldsComponent', () => {
  let component: ExternaldsComponent;
  let fixture: ComponentFixture<ExternaldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternaldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternaldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
