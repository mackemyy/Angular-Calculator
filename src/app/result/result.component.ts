import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Output() finalResult = new EventEmitter<string>();
  @Input() operation!:string;
  @Input() num1!:number;
  @Input() num2!:number;
  @Input() result!:string;
  
  inputsCheck() {
    if(!this.num1 && !this.num2) 
      return false;
    else 
      return true;
  }

   chosenButton() {
    var choice = this.operation;
    if (choice === 'a' || 'b' || 'c' || 'd') 
      true;
    else
      false;
    }

  getResult(operation: string) {
    var choice = operation;
    switch (choice) {
      case 'a': this.getSum(); break;

      case 's': this.getDiff(); break;
      
      case 'm': this.getProd(); break;
      
      case 'd': this.getQuo(); break;

     default:  alert("No such operation exist"); break;
    }
  }

  getSum() {
    let sum = this.num1 + this.num2; 
    this.result = sum.toString(); 
    console.log(this?.result); 
    this.finalResult.emit(this?.result); 
  }

  getDiff() {
    let diff = this.num1 - this.num2; 
    this.result = diff.toString(); 
    console.log(this?.result); 
    this.finalResult.emit(this?.result);
  }
  
  getProd() {
    let mul = this.num1 * this.num2; 
    this.result = mul.toString();
    console.log(this?.result); 
    this.finalResult.emit(this?.result);
  }

  getQuo() {
    if(this.num2 === 0) {
      alert("Cannot be divided by 0"); 
    }
    else {
    let quo = this.num1 / this.num2; 
      this.result = quo.toString();
      console.log(this?.result); 
      this.finalResult.emit(this?.result);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
