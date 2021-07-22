import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input()
  customerName="";

  @Output()
  outputMsgEvent : EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  raiseChildEvent(){
    this.outputMsgEvent.emit("this message is coming from child component");
  }

}
