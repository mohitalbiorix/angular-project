import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private router : Router
  ) { }
  dataSource : any 
  @ViewChild(MatPaginator) paginator: any;

  displayedColumns: string[] = ['name', 'department', 'designation','email' ,'mobileNumber' , 'resume' , 'edit'  ,'delete'];

   ELEMENT_DATA: any = [
    {
      name :'Mohit',
      department :'CSE',
      designation : 'Angular developer',
      email : 'mohitkapadiya1234@gmail.com',
      mobileNumber : '8511877454',
      resume : '',
      edit :'',
      delete : ''
    },
    {
      name :'Mohit',
      department :'CSE',
      designation : 'Angular developer',
      email : 'mohitkapadiya1234@gmail.com',
      mobileNumber : '8511877454',
      resume : '',
      edit :'',
      delete : ''
    },
    {
      name :'Mohit',
      department :'CSE',
      designation : 'Angular developer',
      email : 'mohitkapadiya1234@gmail.com',
      mobileNumber : '8511877454',
      resume : '',
      edit :'',
      delete : ''
    },
    {
      name :'Mohit',
      department :'CSE',
      designation : 'Angular developer',
      email : 'mohitkapadiya1234@gmail.com',
      mobileNumber : '8511877454',
      resume : '',
      edit :'',
      delete : ''
    },
    {
      name :'Mohit',
      department :'CSE',
      designation : 'Angular developer',
      email : 'mohitkapadiya1234@gmail.com',
      mobileNumber : '8511877454',
      resume : '',
      edit :'',
      delete : ''
    },
    {
      name :'Mohit',
      department :'CSE',
      designation : 'Angular developer',
      email : 'mohitkapadiya1234@gmail.com',
      mobileNumber : '8511877454',
      resume : '',
      edit :'',
      delete : ''
    }
  ];
  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addEmployee(){
    this.router.navigate(['/employee/add-employee'])
  }


  

}
