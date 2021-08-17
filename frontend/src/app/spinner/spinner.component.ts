import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// Requires a transparent css (panel)id in a parent stylesheet e.g.:
// #SpinnerComponent {
//   box-shadow: none !important;
//   background: transparent !important;
// }

@Component({
  selector: 'app-do-not-use',
  templateUrl: './spinner.component.html',
  styles: []
})
export class DialogSpinnerComponent { }

@Component({
  selector: 'app-dialog-spinner',
  template: '',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  private dialog!: MatDialogRef<DialogSpinnerComponent>;

  constructor(
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialog = this.matDialog.open(DialogSpinnerComponent, { id: 'SpinnerComponent', disableClose: true });
    });
  }
  ngOnDestroy() {
    setTimeout(() => {
      this.dialog.close();
    });
  }

}