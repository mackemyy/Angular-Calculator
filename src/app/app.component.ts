import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Calculator Components";
  firstNum = 0;
  secondNum = 0;
  oper= '';
  ans= '';
  latestAns='';

  num1(firstNum: number) {
    this.firstNum = firstNum;
  }

  num2(secondNum: number) {
    this.secondNum = secondNum;
  }

  result(ans: string) {
    this.ans = ans;
  }

  operation(oper: string) {
    this.oper = oper;
  }

  finalResult(latestAns: string) {
    this.ans = latestAns;

  }

  }

