import { Component, OnInit } from '@angular/core';
import { CsvgenService } from '../csvgen.service';
import { CsvGen } from '../csvgen';

@Component({
  selector: 'app-csvgen',
  templateUrl: './csvgen.component.html',
  styleUrls: ['./csvgen.component.css']
})
export class CsvgenComponent implements OnInit {

  csvgen : CsvGen = this.csvgenService.getCsvgen();

  constructor(private csvgenService: CsvgenService) { }

  import() :void {
    this.csvgenService.import(this.csvgen)
  }

  ngOnInit() {
  }

}
