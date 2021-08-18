import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CsvgenService } from "../service/csvgen.service"
import { UploaderComponent } from './uploader/uploader.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-csvgen',
  templateUrl: './csvgen.component.html',
  styleUrls: ['./csvgen.component.scss']
})
export class CsvgenComponent implements OnInit {

  @ViewChild(UploaderComponent)
  uploader!: UploaderComponent;

  progressSpinner: boolean = false;

  myForm!: FormGroup;
  pattern = "^[a-zA-Z0-9]+[\.][a-zA-Z0-9.]+[a-zA-Z0-9]$";

  constructor(private fb: FormBuilder,private csvgenService: CsvgenService,private _snackBar: MatSnackBar) {
    this.myForm = this.fb.group({
      informations : this.fb.group({ 
        separator : ['',[Validators.required]],
        className : ['',[Validators.required, Validators.pattern(this.pattern)]]
      }),
      uploader : this.fb.group({
        file : ['',[Validators.required]]
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
      
      this.progressSpinner = true;
      this.csvgenService.importngAsync(payload).subscribe((data: any) => {
        console.log(data);
        const intervalObservable = interval(2000).subscribe( _ => {
          this.csvgenService.getjob(data.jobKey).subscribe((response :any) => { 

            if (response.Status === 'complete' ) {
                intervalObservable.unsubscribe()
                this.openSnackBar('File imported ('+response.Result.nbRowImported+' rows) with class name : '+response.Result.className ,'Done');
                this.progressSpinner = false;
            };
            if (response.Status === 'error' || response.Status === 'internal_error' ) {
                intervalObservable.unsubscribe()
                this.progressSpinner = false;
                alert(JSON.stringify(response));
            };

          });

        });

      },(error: any) => {
        console.log(error);
        this.progressSpinner = false;
        alert(JSON.stringify(error.error));
      });
    }
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  resetForm() { 
    this.myForm.reset();
    this.myForm.setControl('fields',this.fb.array([
    ]));
    this.uploader.file = null;
}

}

