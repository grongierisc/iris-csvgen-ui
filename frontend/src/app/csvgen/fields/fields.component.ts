import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective,FormArray,Validators } from '@angular/forms';
import { CsvgenService } from "../../service/csvgen.service"
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  @Input() formArrayName!: string;
  @ViewChild('accordion') accordion!: MatExpansionPanel;

  form!: FormGroup;
  panelOpenState = false;

  progressSpinner: boolean = false;

  options: string[] = ['VARCHAR(250)', 'VARCHAR(5000)', 'DOUBLE', 'MONEY', 'INTEGER', 'DATE', 'TIMESTAMP', 'POSIXTIME'];
  filteredOptions: Observable<string[]>[] = [];

  constructor(private rootFormGroup: FormGroupDirective,private fb: FormBuilder,private csvgenService: CsvgenService) {}
  
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }

  private _manageNameControl(index: number) {
    this.filteredOptions[index] = this.fields.at(index).get('type')?.valueChanges
      .pipe(
        startWith<string>(''),
        map(value => this._filter(value))
      )!;

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
    this._manageNameControl(this.fields.length - 1);
  }

  deleteField(fieldIndex: number) {
    this.fields.removeAt(fieldIndex);
  }

  guessIt() {

      if (this.form.get('uploader')?.get('file')?.invalid || this.form.get('informations')?.get('separator')?.invalid) {
        console.log('Form: erros in form');
        this.form.get('uploader')?.get('file')?.markAsTouched();
        this.form.get('informations')?.get('separator')?.markAsTouched();
        return;
      }

      this.progressSpinner = true;

      console.log('Form:' + JSON.stringify(this.form.value));

      let body = JSON.stringify(this.form.value);
      let file = this.form.get("uploader.file")?.value;

      let payload: FormData = new FormData();
      payload.append("body",body);
      payload.append("file",file);
      
      this.csvgenService.guessit(payload).subscribe((data: any[]) => {
        this.fields.clear();
        this.accordion.open()
        data.forEach(element => {
          this.addField(element.column,element.type);
        });
        this.progressSpinner = false;
        console.log('Form:' + JSON.stringify(this.form.value));
      },(error: any) => {
        this.progressSpinner = false;
        alert(JSON.stringify(error.error));
      });
    }
  

}


