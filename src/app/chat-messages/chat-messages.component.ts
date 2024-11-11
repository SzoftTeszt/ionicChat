import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
})
export class ChatMessagesComponent  implements OnInit ,OnDestroy {
  newMessage=""
  messages:any
  idozito:any

  constructor(private base:BaseService) { }

  ngOnInit() {
    this.idozito=setInterval(
      ()=>this.base.getMessages().forEach(
        (res:any) => {
          this.messages=[]
          for (const key in res) {
            this.messages.push(res[key])
            // console.log(res[key]);              
            }            
          }     
      )
      ,1000
    )



    // this.getMessages()
  }

  ngOnDestroy() {
      if (this.idozito) clearInterval(this.idozito)
  }


  // getMessages(){
  //   this.base.getMessages().forEach(
  //     (res) => this.messages=res
  //   )
  // }

  addMessage(){
    this.base.postMessage(this.newMessage).subscribe()
      // ()=> this.getMessages()
    // )
  }

}
