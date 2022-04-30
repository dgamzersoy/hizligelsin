import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnClass: string = "";
  @Input() btnText: string = "";
  @Input() btnWidth: string = "100%";

  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(e:any) {
    this.onClick.emit(e);
  }
}
