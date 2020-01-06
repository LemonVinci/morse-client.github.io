import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { morseListComponent } from './morse-list.component';

describe('morseListComponent', () => {
  let component: morseListComponent;
  let fixture: ComponentFixture<morseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ morseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(morseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
