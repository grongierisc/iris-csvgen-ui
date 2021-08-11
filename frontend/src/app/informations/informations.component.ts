import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  pattern = "^[a-zA-Z0-9]+[\.][a-zA-Z0-9.]+[a-zA-Z0-9]$";
  separator: FormControl = new FormControl('',[Validators.required, Validators.maxLength(1)]);
  className: FormControl = new FormControl('',[Validators.required, Validators.pattern(this.pattern)]);

  @Input() myForm!: FormGroup;

  constructor(
  ) {
  }

  ngOnInit() {
    this.myForm.addControl("separator",this.separator);
    this.myForm.addControl("className" ,this.className);
  }

}
