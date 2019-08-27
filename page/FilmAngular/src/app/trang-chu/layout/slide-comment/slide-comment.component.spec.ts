import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCommentComponent } from './slide-comment.component';

describe('SlideCommentComponent', () => {
  let component: SlideCommentComponent;
  let fixture: ComponentFixture<SlideCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
