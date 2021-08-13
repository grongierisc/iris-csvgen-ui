import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective,FormArray,Validators } from '@angular/forms';
import { CsvgenService } from "../../service/csvgen.service"

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  @Input() formArrayName!: string;

  formArray!: FormArray;
  form!: FormGroup;
  panelOpenState = false;

  constructor(private rootFormGroup: FormGroupDirective,private fb: FormBuilder,private csvgenService: CsvgenService) {}
  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  get fields() {
    return this.form.controls["fields"] as FormArray;
  }

  addField(column: string, type: string) {
    const fieldForm = this.fb.group({
      column: [column, Validators.required],
      type: [type, Validators.required]
    });
    this.fields.push(fieldForm);
  }

  deleteField(fieldIndex: number) {
    this.fields.removeAt(fieldIndex);
  }

  guessIt() {

      console.log('Form:' + JSON.stringify(this.form.value));

      let body = JSON.stringify(this.form.value);
      let file = this.form.get("uploader.file")?.value;

      let payload: FormData = new FormData();
      payload.append("body",body);
      payload.append("file",file);
      
      this.csvgenService.guessit(payload).subscribe((data: any[]) => {
        this.fields.clear();
        data.forEach(element => {
          this.addField(element.column,element.type);
        });
        console.log('Form:' + JSON.stringify(this.form.value));
      },(error: any) => {
        console.log(error);
      });
    }
  

}
