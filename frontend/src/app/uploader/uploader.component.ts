import { Component, OnInit, Input} from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  submitted = false;
  file: any;

  @Input() myForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onDrop(event: any){
    this.uploadFile(event[0])
  }

  fromBrowser(event: any){
    this.uploadFile(event.target.files[0])
  }

  uploadFile(file: File) {
    this.myForm.patchValue({
      file: file
    });
    this.myForm.get('file')?.updateValueAndValidity()
    this.file = file
    var reader = new FileReader();
    var SLICE = 1024 * 1;
    var blob = file.slice(0, file.size < SLICE ? file.size : SLICE );
    reader.onload = (e) => {
      var input: HTMLInputElement = <HTMLInputElement>document.getElementById('filePreview')
      input.value = reader.result?.toString()!;
    }
    reader.readAsText(blob);
  }

  reset() {
    this.submitted = false;
    this.myForm.reset();
    this.file = null;
  }

  /**
   * Delete file 
  */
  deleteFile() {
    this.file = null;
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals?: number) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals! <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
