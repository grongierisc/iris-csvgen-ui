import { Component, OnInit, Input} from '@angular/core';
import { FormGroup,FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  file: any;

  @Input() formGroupName!: string;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  onDrop(event: any){
    this.uploadFile(event[0])
  }

  fromBrowser(event: any){
    this.uploadFile(event.target.files[0])
  }

  uploadFile(file: any) {
    this.form.patchValue({
      file: file
    });
    this.file = file
    var reader = new FileReader();
    var SLICE = 1024 * 2;
    var blob = file.slice(0, file.size < SLICE ? file.size : SLICE );
    reader.onload = (e) => {
      var input: HTMLInputElement = <HTMLInputElement>document.getElementById('filePreview')
      input.value = reader.result?.toString()!;
    }
    reader.readAsText(blob);
  }

  /**
   * Delete file 
  */
  deleteFile() {
    this.file = null;
    this.form.reset()
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
