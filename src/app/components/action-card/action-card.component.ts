import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.css']
})
export class ActionCardComponent implements OnInit {
  @Input() title  
  @Input() text
  @Input() img
  @Input() action
  constructor() { }

  ngOnInit(): void {
  }

}
