import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-csvgen',
  templateUrl: './csvgen.component.html',
  styleUrls: ['./csvgen.component.scss']
})
export class CsvgenComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({})
  }

  ngOnInit() { }

  onSubmitted() {}

}

