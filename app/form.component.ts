import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/common';

import { FormService } from './form.service';
import { User }    from './user';

@Component({
  selector: 'user-form',
  templateUrl: 'app/form.component.html',
  providers: [FormService]
})

export class FormComponent implements OnInit {
  constructor ( private formService: FormService ) {};

  users: User[] =[];
  id: number = 1;
  errorMessage: string;
  user = new User(this.id, '', '', '', '', '','','Pending');
  submitted = false;
  active = true;
  error: any;

  getUsers() {
    return this.formService
               .getUsers()
               .map( users => { this.users = users; this.id = users.length;});
  }
  save() {
    this.getUsers().subscribe(
        users => { this.formService.save(this.user) },
        err => { this.errorMessage = err; console.log(err); }
    );
  }

  /////////////////////////
  // Event handlers
  /////////////////////////
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  ngOnInit() {
    this.getUsers();
  }
  clear() {
    this.user = new User(this.id, '', '', '', '', '', '','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
