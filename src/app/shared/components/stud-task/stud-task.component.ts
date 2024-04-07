import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-stud-task',
  templateUrl: './stud-task.component.html',
  styleUrls: ['./stud-task.component.scss']
})
export class StudTaskComponent implements OnInit {
  stdArr: Array<Istd> = [
    {
    fname : "Jhon",
    lname : "Doe",
    email : "jd@gmail.com",
    contact : 1234567890
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(fname : HTMLInputElement, lname : HTMLInputElement, email : HTMLInputElement, contact : HTMLInputElement){
    // console.log(fname);
    // console.log(lname);
    // console.log(email);
    // console.log(contact);

    if(fname.value && lname.value && email.value && contact.value){
      let newstd: Istd = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        contact: +contact.value,
      }
      console.log(newstd);
      fname.value = lname.value = email.value = contact.value = '';
      this.stdArr.push(newstd)
    }
  }

}
