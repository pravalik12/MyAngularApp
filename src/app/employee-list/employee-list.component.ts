import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
// import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService, private router: Router) { 
    
  }
 
  private getEmployeeList(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  // id: number | undefined;
  updateEmployee(id: number | undefined) {
    this.router.navigate(["update-employee", id]);
  }


  ngOnInit(): void {
    // this.employees = [
    //   {
    //     "id": 1,
    //     "firstName": "Pravalik",
    //     "lastName": "Reddy",
    //     "emailId": "pspreddy@gmail.com",
    //   },
    //   {
    //     "id": 2,
    //     "firstName": "Kiriti",
    //     "lastName": "Munipalle",
    //     "emailId": "kiriti@gmail.com",
    //   }
    // ]
    this.getEmployeeList();
  }

}
