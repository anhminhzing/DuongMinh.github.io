import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaorouselComponent } from './caorousel.component';

describe('CaorouselComponent', () => {
  let component: CaorouselComponent;
  let fixture: ComponentFixture<CaorouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaorouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaorouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
