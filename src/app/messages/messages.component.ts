import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {
  @Input() messages:any
  constructor() { }

  ngOnInit() {}

}
