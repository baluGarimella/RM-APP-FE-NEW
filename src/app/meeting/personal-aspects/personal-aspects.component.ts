import { Component, OnInit, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { PersonalAspect } from '../../interfaces/client.interface';

@Component({
  selector: 'app-personal-aspects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-aspects.component.html',
  styleUrls: ['../meeting.component.scss','./personal-aspects.component.scss']
})
export class PersonalAspectsComponent implements OnInit {
  personalAspectsData = signal<PersonalAspect | null>(null);
  @Input() clientId: string | null = null;

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
  if (this.clientId) {
      this.meetingsService.getPersonalAspectsData(this.clientId).subscribe(data => {
        this.personalAspectsData.set(data);
      });  
    }

    }
  }