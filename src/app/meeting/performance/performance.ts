import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance.html',
  styleUrls: ['../meeting.component.scss','./performance.scss']
})
export class Performance implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
