import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FormService } from './form.service';
import { User } from './user'

@Component({
  selector: 'user-details',
  templateUrl: 'app/details.component.html',
  providers: [FormService]
})

export class DetailsComponent implements OnInit, OnDestroy {
  constructor ( private formService: FormService,
                private route: ActivatedRoute) {};
  user: User;
  sub: any;

  /////////////////////////
  // Event handlers
  /////////////////////////
  getUser(){
    return this.sub = this.route.params.map( params => {
      let id = +params['id'];
      return this.formService
                 .getDetails(id)
                 .map( user => this.user = user );
    });
  }
  ngOnInit() {
    this.getUser().subscribe(()=>console.log(JSON.stringify(this.user)));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  goBack() {
    window.history.back();
  }
}
