import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective,FormArray,Validators } from '@angular/forms';

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

  constructor(private rootFormGroup: FormGroupDirective,private fb: FormBuilder) {}


  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  get fields() {
    return this.form.controls["fields"] as FormArray;
  }

  addField() {
    const fieldForm = this.fb.group({
      column: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.fields.push(fieldForm);
  }

  deleteField(fieldIndex: number) {
    this.fields.removeAt(fieldIndex);
  }

}
