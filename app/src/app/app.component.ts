import { Component } from '@angular/core';
import { Computer } from './computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TenWatcher';
  computers = COMPUTERS;
  selectedComputer: Computer;

  onSelect(computer: Computer): void {
    this.selectedComputer = computer;
  }

  onDblClick(computer: Computer): void {
    computer.editing = true;
  }

  doneEditing(computer: Computer): void {
    computer.editing = false;
  }
}

const COMPUTERS: Computer[] = [
  { name: 'Ordi 1', mac: 'aa.aa.aa.aa.aa.aa', ip: '192.168.1.10', editing: false },
  { name: 'Ordi 2', mac: 'aa.aa.aa.aa.aa.bb', ip: '192.168.1.10', editing: false },
  { name: 'Ordi 3', mac: 'aa.aa.aa.aa.aa.cc', ip: '192.168.1.10', editing: false },
  { name: 'Ordi 4', mac: 'aa.aa.aa.aa.aa.dd', ip: '192.168.1.10', editing: false },
  { name: 'Ordi 5', mac: 'aa.aa.aa.aa.aa.ee', ip: '192.168.1.10', editing: false },
  { name: 'Ordi 6', mac: 'aa.aa.aa.aa.aa.ff', ip: '192.168.1.10', editing: false }
];
