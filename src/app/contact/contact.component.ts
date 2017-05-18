import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = "this is a message";


  updateText(){
    console.log("Updating Text");
  }
  sendMessage() {
    this.message = "your message was sent";
  }

}
