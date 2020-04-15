import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythondsplatformComponent } from './pythondsplatform.component';

describe('PythondsplatformComponent', () => {
  let component: PythondsplatformComponent;
  let fixture: ComponentFixture<PythondsplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythondsplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythondsplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
