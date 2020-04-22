import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseNavigatorComponent } from './database-navigator.component';

describe('DatabaseNavigatorComponent', () => {
  let component: DatabaseNavigatorComponent;
  let fixture: ComponentFixture<DatabaseNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
