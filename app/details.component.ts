import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';

import { FormService } from './form.service';

@Component({
  selector: 'details',
  templateUrl: 'app/details.component.html',
  providers: [FormService]
})

export class DetailsComponent implements OnInit {
  constructor ( private formService: FormService ) {};

  getUsers() {
    return this.formService
               .getUsers()
               .map( users => { console.log(users)});
  }

  /////////////////////////
  // Event handlers
  /////////////////////////
  ngOnInit() {
    this.getUsers();
  }

}
