import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  @Input() selectClass: string = "";
  @Input() values: string[];
  @Input() btnWidth: string = "100%";

  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(e:any) {
    this.onClick.emit(e);
  }
}
