import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFromLastMeeting } from './summary-from-last-meeting';

describe('SummaryFromLastMeeting', () => {
  let component: SummaryFromLastMeeting;
  let fixture: ComponentFixture<SummaryFromLastMeeting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryFromLastMeeting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryFromLastMeeting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
