import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Output() onEnter = new EventEmitter();
  @Input() value: any;
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() txtBoxClass:string = "";
  @Input() txtBoxWidth: string = "100%";

  eyeIcon = faEye;



  constructor() {}

  ngOnInit() { }

  onChange(e: any) {
    this.valueChange.emit(this.value);
  }

  onKeyEnter() {
    this.valueChange.emit(this.value);
    this.onEnter.emit(this.value);
  }
}
