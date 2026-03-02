import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-from-last-meeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-from-last-meeting.html',
  styleUrls: ['../meeting.component.scss','./summary-from-last-meeting.scss']
})
export class SummaryFromLastMeeting implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
