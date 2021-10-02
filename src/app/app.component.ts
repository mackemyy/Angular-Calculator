import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIMPLE ANGULAR CALCULATOR';
  firstNum= 0;
  secondNum= 0;
  result= '';

  getFirstNum(value: string) {
    var letters = /[a-zA-Z]/g;
    var check = value;
    this.result= '';
            
    if(letters.test(check)){
      alert("You have entered a string. Please input a number");
    } 
    else {
      const parsedInt = parseInt(value);
      this.firstNum = parsedInt;
      console.log(this.firstNum);
    }
  }

  getSecondNum(value: string) {
    var letters = /[a-zA-Z]/g;
    var check = value;
    this.result= '';
            
    if(letters.test(check)){
      alert("You have entered a string. Please input a number");
    } 
    else {
      const parsedInt = parseInt(value);
      this.secondNum = parsedInt;
      console.log(this.secondNum);
    }
  }

  getSum() {
    let sum =  this.firstNum + this.secondNum;
    this.result = sum.toString();
  }

  getDifference() {
    let diff = this.firstNum - this.secondNum;(this.firstNum && this.secondNum) 
    this.result = diff.toString();
  }

  getProduct() {
    let prod = this.firstNum * this.secondNum;
    this.result = prod.toString();
  }

  getQuotient() {
    if(this.secondNum === 0) {
      alert("Cannot be divided by 0.")
    }

    else {
      let quo = this.firstNum / this.secondNum;
      this.result = quo.toString();
    }
  }
}
