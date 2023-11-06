import { Injectable, OnInit } from '@angular/core';
import { IChat } from '../components/interfaces/ichat';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {
  private id=10;
  private chats: IChat[] = [
    {
      id: '1',
      displayName: 'John Doe',
      email: 'john@example.com',
      type: 'human',
      message: 'Hello there!',
      createdAt: '2023-10-26T10:00:00',
      isMe: true,
    },
    {
      id: '2',
      displayName: 'Alice Smith',
      email: 'alice@example.com',
      type: 'human',
      message: 'Hi, how are you?',
      createdAt: '2023-10-26T10:05:00',
      isMe: false,
    },
    {
      id: '3',
      displayName: 'Emma Johnson',
      email: 'emma@example.com',
      type: 'human',
      message: 'Good morning!',
      createdAt: '2023-10-26T10:10:00',
      isMe: true,
    },
    {
      id: '4',
      displayName: 'Bob Williams',
      email: 'bob@example.com',
      type: 'human',
      message: "How's the weather today?",
      createdAt: '2023-10-26T10:15:00',
      isMe: false,
    },
    {
      id: '5',
      displayName: 'Olivia Davis',
      email: 'olivia@example.com',
      type: 'human',
      message: 'I like your chat app!',
      createdAt: '2023-10-26T10:20:00',
      isMe: true,
    },
    {
      id: '6',
      displayName: 'Liam Miller',
      email: 'liam@example.com',
      type: 'human',
      message: "Thanks! It's great!",
      createdAt: '2023-10-26T10:25:00',
      isMe: true,
    },
    {
      id: '7',
      displayName: 'Ava Wilson',
      email: 'ava@example.com',
      type: 'human',
      message: 'What are the features?',
      createdAt: '2023-10-26T10:30:00',
      isMe: false,
    },
    {
      id: '8',
      displayName: 'Mason Jones',
      email: 'mason@example.com',
      type: 'human',
      message: 'We have real-time chat and more!',
      createdAt: '2023-10-26T10:35:00',
      isMe: true,
    },
    {
      id: '9',
      displayName: 'Charlotte Garcia',
      email: 'charlotte@example.com',
      type: 'human',
      message: 'Sounds awesome!',
      createdAt: '2023-10-26T10:40:00',
      isMe: false,
    },
    {
      id: '10',
      displayName: 'Ethan Martinez',
      email: 'ethan@example.com',
      type: 'human',
      message: 'Feel free to ask any questions!',
      createdAt: '2023-10-26T10:45:00',
      isMe: true,
    },
    // Add more sample data entries as needed
  ];;
  constructor() {
    
   }
  ngOnInit(): void {
  }

  addMessage(message:IChat){
    this.chats.push(message)
  }

  getmessages(){
    return this.chats;
  }
  
}
