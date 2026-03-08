import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsService } from '../../services/meetings.service';
import { ClientPerformance } from '../../interfaces/client.interface';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './performance.html',
  styleUrls: ['../meeting.component.scss','./performance.scss']
})
export class Performance implements OnInit {
  performanceData = signal<ClientPerformance | null>(null);
  monthlyReturnPercentage = signal<string | null>(null); 

  @Input() clientId: string | null = null;
  @Input() rmId: string | null = null;

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit(): void {
    this.getPerformanceData();
  }

  getPerformanceData(): void {
        if (this.rmId && this.clientId) {
          this.meetingsService.getPerformanceData(
            this.rmId, this.clientId).subscribe(data => {
            this.performanceData.set(data);
          });
        }
  }

}
