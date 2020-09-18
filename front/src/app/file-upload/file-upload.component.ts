import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  form: FormGroup;


  constructor(
    public fb: FormBuilder,
    private http: HttpClient,

  ) {
    this.form = this.fb.group({
      separator: [''],
      tableName: [''],
      file: [null]
    })

  }

  ngOnInit() { }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      file: file
    });
    this.form.get('file').updateValueAndValidity()
  }

  submitForm() {
    var formData: any = new FormData();
    let body = {
      "separator": this.form.get('separator').value,
      "tableName": this.form.get('tableName').value
    }
    var stringBody = JSON.stringify(body)
    formData.append("body", stringBody);
    formData.append("file", this.form.get('file').value)

    this.http.post('http://localhost:52773/api/csvgen/import', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
  }


}
