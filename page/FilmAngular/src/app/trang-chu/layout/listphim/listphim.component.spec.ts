import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListphimComponent } from './listphim.component';

describe('ListphimComponent', () => {
  let component: ListphimComponent;
  let fixture: ComponentFixture<ListphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
