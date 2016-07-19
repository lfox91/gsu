import { Component, OnInit, ElementRef, Directive } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Router } from '@angular/router';

import { FormService } from './form.service';
import { User } from './user';
declare var jQuery: any;

@Component({
  selector: 'requests',
  templateUrl: 'app/request.component.html',
  providers: [FormService]
})
@Directive({
    selector: '.table'
})
export class RequestsComponent implements OnInit {
  constructor ( private formService: FormService,
                private elRef: ElementRef,
                private router: Router ) {};
  users: User[]= [] ;
  selectedUser: User;
  getUsers() {
    return this.formService
               .getUsers()
               .map( users => this.users = users );
  }

  /////////////////////////
  // Event handlers
  /////////////////////////
  ngOnInit() {
    this.getUsers();
    jQuery(this.elRef.nativeElement).DataTable();
  }
  showDetail( user: User ) {
    this.selectedUser = user;
    this.router.navigate(['/requests/', this.selectedUser.Id]);
  }

}
