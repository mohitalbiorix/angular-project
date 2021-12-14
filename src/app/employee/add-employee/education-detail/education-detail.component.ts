import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  constructor() { }

  @Input() empForm : any 
  @Output('addEducationDetail') addEducationDetail = new EventEmitter();
  @Output("removeEducationDetail") removeEducationDetail = new EventEmitter();
  action = 'EDUCATION_DETAIL'
  isButtonDisable = false;

  ngOnInit(): void {
  }


  get f() {
    return this.empForm.controls.educationDetailForm.controls.educationDetail;
  }

  addEducation(){
    this.addEducationDetail.emit();
    this.isButtonDisable = true;
  }


  submitEducationDetail(i : any){
    this.isButtonDisable = false;
    this.setDisableForm(i)
  }

  setDisableForm(index : any){
    ((this.empForm.get('educationDetailForm').get('educationDetail').controls as FormArray).at(index) as FormGroup).disable();
  }

  setEnableForm(index : any){
    ((this.empForm.get('educationDetailForm').get('educationDetail').controls as FormArray).at(index) as FormGroup).enable();
  }

  editEducationDetail(i : any){
    this.isButtonDisable = false;
    this.setEnableForm(i)
    
  }

  deleteEducationDetail(index : number){
    this.isButtonDisable = false;
    this.removeEducationDetail.emit();
    //this.empForm.get('educationDetailForm').get('educationDetail').disable();
  }


}
