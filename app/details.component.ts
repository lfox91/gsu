import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm }    from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { FormService } from './form.service';
import { User } from './user'

@Component({
  selector: 'details',
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
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.formService.getDetails(id)
                      .subscribe(user => this.user = user);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
