import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CsvgenService } from "../service/csvgen.service"


@Component({
  selector: 'app-csvgen',
  templateUrl: './csvgen.component.html',
  styleUrls: ['./csvgen.component.scss']
})
export class CsvgenComponent implements OnInit {

  myForm!: FormGroup;
  pattern = "^[a-zA-Z0-9]+[\.][a-zA-Z0-9.]+[a-zA-Z0-9]$";

  constructor(private fb: FormBuilder,private csvgenService: CsvgenService) {
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

      let body = JSON.stringify(this.myForm.value);
      let file = this.myForm.get("uploader.file")?.value

      let payload: FormData = new FormData();
      payload.append("body",body)
      payload.append("file",file)
      
      this.csvgenService.importng(payload).subscribe((data: any) => {
        console.log(data);
      },(error: any) => {
        console.log(error);
      });
    }
    
  }

  resetForm() { 
    this.myForm.reset();
}

}

