import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-list.html',
  styleUrls: ['./meeting-list.scss']
})
export class MeetingList {
  meetings = [
    { id: 1, title: 'Sprint Planning', date: '2026-02-24', time: '10:00' },
    { id: 2, title: 'Client Sync', date: '2026-02-25', time: '14:00' },
    { id: 3, title: 'Retrospective', date: '2026-02-26', time: '11:30' }
  ];

  trackById(_index: number, item: any) {
    return item.id;
  }
}
