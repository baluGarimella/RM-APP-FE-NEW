import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-client-constraints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-constraints.component.html',
  styleUrls: ['../meeting.component.scss','./client-constraints.component.scss']
})
export class ClientConstraintsComponent implements OnInit {

  constraints: string[] = [];

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
    this.meetingsService.getConstraints().subscribe((data: any) => {
      this.constraints = data;
    });
  }

}
