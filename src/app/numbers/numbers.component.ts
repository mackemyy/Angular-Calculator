import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: '<app-numbers>',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent  {
  ans='';
  firstNum = 0;
  secondNum = 0;
  
  @Output() num1 = new EventEmitter<number>();
  @Output() num2 = new EventEmitter<number>();
  @Output() result = new EventEmitter<string>();
  
  getFirstNum(value: string) {
    var letters = /[a-zA-Z]/g;
    var check = value;
    this.ans = '';
            
    if(letters.test(check)){
      alert("You have entered a string. Please input a number");
    } 
    else {
      this.firstNum = parseInt(check);
      this.num1.emit(this.firstNum);
      this.result.emit(this.ans);
      console.log(this.firstNum);
    }
  }

 
  getSecondNum(value: string) {
    var letters = /[a-zA-Z]/g;
    var check = value;
    this.ans = '';
            
    if(letters.test(check)){
      alert("You have entered a string. Please input a number");
    } 
    else {
      this.secondNum = parseInt(check);
      this.num2.emit(this.secondNum);
      this.result.emit(this.ans);
      console.log(this.secondNum);
    }
  }
  
  }


