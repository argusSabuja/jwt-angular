import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Stomp, SockJS } from 'stompjs';
import { UserService } from '../service/user.service';
import { IChat } from '../components/interfaces/ichat';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})

export class ChatPageComponent {
  username = '';
  message:"";
dataToSend: "hello ji";
  
  constructor(private router: Router, private userService: UserService) {
    this.username = this.userService.getUserName();
  }
  // dataToSend=this.message;
  handleMessageChange(){
if(this.message==""){
  
}
else{
  console.log(this.message);
  const newMessage: IChat = {
    id: 'unique_id', // Generate a unique ID here
    displayName: 'Your Name', // Set the sender's name
    email: 'your_email@example.com', // Set the sender's email
    type: 'human',
    message: this.message,
    createdAt: new Date().toUTCString(), // Set the current timestamp
    isMe: true, // Assuming it's the sender's message
  };
}
  }
}
