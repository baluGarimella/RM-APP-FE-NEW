import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-profile.component.html',
  styleUrls: ['../meeting.component.scss','./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  clientProfile: any = {};

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
    this.meetingsService.getClientProfile().subscribe(data => {
      this.clientProfile = data;
    });
  }

}
