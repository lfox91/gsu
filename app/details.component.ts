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
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      let id = +params['id'];
      this.formService.getDetails(id)
                      .subscribe( user => {
                        this.user = user;
                        console.log('ngOnInit this.user  = ' + JSON.stringify( this.user));
                      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngOnChanges( changes: any ){
    this.user = changes;
  }
  goBack() {
    window.history.back();
  }
}
