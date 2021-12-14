import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  constructor() { }

  personalDetailForm : any
  @Input('empForm') empForm : any
  public imagePath: any;
  imgURL: any;
  action = 'PERSONAL_DETAIL'


  ngOnInit(): void {
    
  }

  get f() {
    return this.empForm.controls.personalDetailForm.controls;
  }

  preview(imageInput: any) {

    if(imageInput.files[0]){
      const file = imageInput.files[0];
      var pattern = /image-*/;
      
      if (!file.type.match(pattern)) {
        return;
      }
    }

    var reader = new FileReader();
    this.imagePath = imageInput;
    reader.readAsDataURL(imageInput[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    
  }

  checkAddress(value : any){
    if(value === true){
       this.empForm.get('personalDetailForm').get('permanentAddress').setValue(this.empForm.value.personalDetailForm.presentAddress)
        console.log(this.empForm.value.personalDetailForm.presentAddress)
    }
    else{
      this.empForm.get('personalDetailForm').get('permanentAddress').setValue('')
    }
  }

}
