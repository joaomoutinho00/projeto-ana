import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeAmoComponent } from './te-amo.component';

describe('TeAmoComponent', () => {
  let component: TeAmoComponent;
  let fixture: ComponentFixture<TeAmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeAmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeAmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
