import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingdsComponent } from './existingds.component';

describe('ExistingdsComponent', () => {
  let component: ExistingdsComponent;
  let fixture: ComponentFixture<ExistingdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
