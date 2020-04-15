import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsplatformComponent } from './rdsplatform.component';

describe('RdsplatformComponent', () => {
  let component: RdsplatformComponent;
  let fixture: ComponentFixture<RdsplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdsplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
