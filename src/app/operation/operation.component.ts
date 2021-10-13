import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit{
 @Output() operation = new EventEmitter<string>();
 @Input() num1!:number;
 @Input() num2!:number;

 getOperation(value: string) {
  var chosenOper = value;
  this.operation.emit(chosenOper);
 }

inputsCheck() {
  if(!this.num1 && !this.num2) 
    return false;
  else 
    return true;
}


  constructor() { }

  ngOnInit(): void {
  }

}
