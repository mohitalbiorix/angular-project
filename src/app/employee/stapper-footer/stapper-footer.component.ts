import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stapper-footer',
  templateUrl: './stapper-footer.component.html',
  styleUrls: ['./stapper-footer.component.css']
})
export class StapperFooterComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  @Input() stepperName : any
  @Input() empForm : any

  ngOnInit(): void {
    console.log(this.stepperName);
  }


  onBackClick(){
    this.router.navigate(['/employee/employee-list'])
  }


  saveEmployeeForm(){
    // const employeeFormValue = this.empForm.value
    // var data = JSON.parse(localStorage.getItem('employeeForm') || '{}')
    // data.push(employeeFormValue);
    // localStorage.setItem('employeeForm', JSON.stringify(data));
  }

}
