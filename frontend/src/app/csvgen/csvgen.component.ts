import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-csvgen',
  templateUrl: './csvgen.component.html',
  styleUrls: ['./csvgen.component.scss']
})
export class CsvgenComponent implements OnInit {

  myForm!: FormGroup;
  pattern = "^[a-zA-Z0-9]+[\.][a-zA-Z0-9.]+[a-zA-Z0-9]$";

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      informations : this.fb.group({ 
        separator : ['',[Validators.required]],
        className : ['',[Validators.required, Validators.pattern(this.pattern)]]
      }),
      uploader : this.fb.group({
        file : [File,[Validators.required]]
      }),
      fields : this.fb.array([
      ]),
    })
  }

  ngOnInit() { }

  onSubmitted() {
    if (this.myForm.invalid) {
      console.log('Form: erros in form');
      this.myForm.markAllAsTouched();
    } else {
      console.log('Form:' + JSON.stringify(this.myForm.value));
    }
    
  }

  resetForm() { 
    this.myForm.reset();
}

}

