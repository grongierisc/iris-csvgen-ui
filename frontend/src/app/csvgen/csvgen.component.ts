import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-csvgen',
  templateUrl: './csvgen.component.html',
  styleUrls: ['./csvgen.component.scss']
})
export class CsvgenComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      informations : this.fb.group({ 
        separator : '',
        className : ''
      }),
      uploader : this.fb.group({
        file : File
      }),
      fields : this.fb.array([
      ]),
    })
  }

  ngOnInit() { }

  onSubmitted() {
    console.log('Form:' + JSON.stringify(this.myForm.value));
  }

  resetForm() { 
    this.myForm.reset();
}

}

