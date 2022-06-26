import { dummyModel } from './../set.model';
import { ApiService } from './../../../core/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-set',
  templateUrl: './update-set.component.html',
  styleUrls: ['./update-set.component.css']
})
export class UpdateSetComponent implements OnInit, OnDestroy {
  setSub: Subscription;
  set: dummyModel;


  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.setSub = this.apiService.getSet$('62b81264b51cc3411b770a15')
    .subscribe(
      res => {
        console.log(res);
        this.set = res;
      }, err => {
        console.log(err);
    });
  }

  ngOnDestroy() {
    if (this.setSub) {
      this.setSub.unsubscribe();
    }
  }

}
