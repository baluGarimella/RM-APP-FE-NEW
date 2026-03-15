import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiTalkingPoints } from './ai-talking-points.component';

describe('AiTalkingPoints', () => {
  let component: AiTalkingPoints;
  let fixture: ComponentFixture<AiTalkingPoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiTalkingPoints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiTalkingPoints);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
