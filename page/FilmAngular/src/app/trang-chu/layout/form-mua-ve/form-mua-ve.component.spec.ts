import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMuaVeComponent } from './form-mua-ve.component';

describe('FormMuaVeComponent', () => {
  let component: FormMuaVeComponent;
  let fixture: ComponentFixture<FormMuaVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMuaVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMuaVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
