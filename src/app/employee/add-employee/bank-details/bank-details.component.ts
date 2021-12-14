import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  constructor() { }
  @Input('empForm') empForm : any
  action = 'BANK_DETAIL'

  ngOnInit(): void {
  }

  get f() {
    return this.empForm.controls.bankDetailForm.controls;
  }


}
