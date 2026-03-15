import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { AIRecommendationsInfo } from '../../interfaces/client.interface';

@Component({
  selector: 'app-ai-talking-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-talking-points.component.html',
  styleUrls: ['../meeting.component.scss','./ai-talking-points.component.scss']
})
export class AiTalkingPoints implements OnInit {

  aiTalkingPoints = signal<any | null>(null); // Property to hold fetched data as signal

  @Input() clientId: string | null = null;
  @Input() rmId: string | null = null;
  constructor(private meetingsService: MeetingsService) { }

 ngOnInit(): void {
    this.getAITalkingPoints();
  }

  getAITalkingPoints(): void {
        if (this.rmId && this.clientId) {
          this.meetingsService.getAITalkingPoints(
            this.rmId, this.clientId).subscribe(data => {
            this.aiTalkingPoints.set(data);
          });
        }
  }
}

