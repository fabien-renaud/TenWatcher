import { Component, OnInit } from '@angular/core';
import { Computer } from './computer';
import { Data } from './data';

import { DataService } from './services/data.service';
import { ComputerService } from './services/computer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TenWatcher';
  computers: Computer[];
  selectedComputer: Computer;
  dataComputer: Data;

  constructor(private dataService: DataService, private computerService: ComputerService) { }

  ngOnInit() {
    this.getComputers();
  }

  getComputers() {
    this.computerService.getComputers().subscribe((res) => {
      this.computers = res;
    });
  }

  // updateComputer(computer) {
  //   this.computerService.updateComputer(name).subscribe((res) => {
  //     this.computers = res;
  //   });
  // }

  onSelect(computer: Computer): void {
    this.dataService.getDatas(computer.mac).subscribe((res) => {
      var datas:Data = this.dataService.prepareDatas(res);
      this.dataComputer = datas;
    })
    this.selectedComputer = computer;
  }

  onDblClick(computer: Computer): void {
    computer.editing = true;
  }

  doneEditing(computer: Computer): void {
    computer.editing = false;
  }
}
