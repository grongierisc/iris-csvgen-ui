import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  @Input() myForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  
  ngOnInit(): void {
  }

}
