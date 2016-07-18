import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';

import { FormService } from './form.service';
import { User } from './user';

@Component({
  selector: 'requests',
  templateUrl: 'app/request.component.html',
  providers: [FormService]
})

export class RequestsComponent implements OnInit {
  constructor ( private formService: FormService ) {};
  users: User[]= [] ;
  getUsers() {
    return this.formService
               .getUsers()
               .map( users => this.users = users );
  }

  /////////////////////////
  // Event handlers
  /////////////////////////
  ngOnInit() {
    this.getUsers().subscribe( () => console.table(this.users));
  }

}
