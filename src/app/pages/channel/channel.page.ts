import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})
export class ChannelPage implements OnInit {

  constructor() { }

  @ViewChild(IonContent, {static: false}) content: IonContent;
  
  newMsg= '';
  currentUser = 'simon';
  messages = [
    {
      user: 'simon',
      createdAt: 15554090856000,
      msg: 'Hey'
    },
    {
      user: 'max',
      createdAt: 1554090956000,
      msg:'How are you doing How are you doing How are you doing How are you doing How are you doing',
    },
    {
      user: 'simon',
      createdAt: 1554090956000,
      msg:'I am trying something How are you doing How are you doing How are you doing',
    }
  ];

  ngOnInit() {
  }

  sendMessage() {
    this.messages.push({
      user: 'simon',
      createdAt : new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(()=> {
      this.content.scrollToBottom(200);
    });
  }

}
