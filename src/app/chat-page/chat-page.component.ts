import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Stomp, SockJS } from 'stompjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {
  username = '';
  constructor(private router: Router, private userService: UserService) {
    this.username = this.userService.getUserName();
  }
}
