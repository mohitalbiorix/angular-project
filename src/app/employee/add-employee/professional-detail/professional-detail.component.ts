import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.css']
})
export class ProfessionalDetailComponent implements OnInit {

  constructor() { }

  @Input('empForm') empForm : any
  action = 'PROFESSIONAL_DETAIL'
  uploadResume = 'UPLOAD RESUME'

  experienceYears = [
    {id : '0', name :'0 Years'},
    {id : '1', name :'1 Years'},
    {id : '2', name :'2 Years'},
    {id : '3', name :'3 Years'},
    {id : '4', name :'4 Years'},
    {id : '5', name :'5 Years'},
    {id : '5', name :'6 Years'},
    {id : '7', name :'7 Years'},
    {id : '8', name :'8 Years'},
    {id : '9', name :'9 Years'},
    {id : '10', name :'10 Years'},
    {id : '11', name :'11 Years'},
    {id : '12', name :'12 Years'},
    {id : '13', name :'13 Years'},
    {id : '14', name :'14 Years'},
  ]

  experienceMonths =[
    {id : '1', name :'1 Month'},
    {id : '2', name :'2 Month'},
    {id : '3', name :'3 Month'},
    {id : '4', name :'4 Month'},
    {id : '5', name :'5 Month'},
    {id : '5', name :'6 Month'},
    {id : '7', name :'7 Month'},
    {id : '8', name :'8 Month'},
    {id : '9', name :'9 Month'},
    {id : '10', name :'10 Month'},
    {id : '11', name :'11 Month'},
  ]

  skills =[
    {id : 'java', name :'Java'},
    {id : 'python', name :'Python'},
    {id : 'asp.net', name :'ASP.NET'},
  ]

  ngOnInit(): void {
  }



  get f() {
    return this.empForm.controls.professionalDetailForm.controls;
  }

  

}
