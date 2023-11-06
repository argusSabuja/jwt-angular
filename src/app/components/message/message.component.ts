// src/app/chat/chat.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { IChat } from '../interfaces/ichat';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
    @Input() childInput: string;
  chats: IChat[] = [];
message: string;
  messages$: Observable<Array<{ message: string }>>;
  refreshMessages$ = new BehaviorSubject<boolean>(true);
  sending: boolean;

  constructor(private api: ApiService,
    private sharedService:SharedService) {}

  ngOnInit() {
    // subscribe to pusher's event
    this.chats=this.sharedService.getmessages();
    this.messages$ = this.refreshMessages$.pipe(
      switchMap((_) => this.api.getmessages())
    );
    
  }

  sendMessage() {
    if (this.message) {
      // Check if the message is not empty
      // Create a new chat message
      const newMessage: IChat = {
        id: 'unique_id', // Generate a unique ID here
        displayName: 'Your Name', // Set the sender's name
        email: 'your_email@example.com', // Set the sender's email
        type: 'human',
        message: this.message,
        createdAt: new Date().toUTCString(), // Set the current timestamp
        isMe: true, // Assuming it's the sender's message
      };

      // Add the new message to the chats array
      this.chats.push(newMessage);

      // Clear the input field
      this.message = '';


      console.log(this.childInput)

      // You can also send the new message to your backend here if needed
      // this.api.sendMessage(this.message);
    }
  }
}
