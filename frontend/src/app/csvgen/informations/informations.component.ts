import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  // pattern = "^[a-zA-Z0-9]+[\.][a-zA-Z0-9.]+[a-zA-Z0-9]$";
  // separator: FormControl = new FormControl('',[Validators.required, Validators.maxLength(1)]);
  // className: FormControl = new FormControl('',[Validators.required, Validators.pattern(this.pattern)]);

  @Input() formGroupName!: string;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {  }

  ngOnInit() {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  get separator() {
    return this.form.get("separator") as FormControl;
  }

  get className() {
    return this.form.get("className") as FormControl;
  }

}
