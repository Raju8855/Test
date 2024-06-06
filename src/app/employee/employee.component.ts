import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeename: string = "";
  address: string = "";
  mobile: string = "";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  register() {
    let bodyData = {
      "employeename" : this.employeename,
      "address" : this.address,
      "mobile" : this.mobile
    };

    this.http.post("http://localhost:8085/api/v1/employee/save", bodyData).subscribe((result:any)=>
    {
      console.log(result);
      alert("Employee Registered Successfully")

      this.employeename = '';
      this.address = '';
      this.mobile = '';
    });
    this.resetForm();
  }

  resetForm() {
    this.employeename = '';
    this.address = '';
    this.mobile = '';
  }

}
