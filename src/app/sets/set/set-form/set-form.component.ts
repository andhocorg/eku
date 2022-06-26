import { dummyModel } from './../set.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent implements OnInit {
  @Input() set: dummyModel;
  @Input() edit: boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
