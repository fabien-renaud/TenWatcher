import { Component, Input } from '@angular/core';

import { Computer } from './computer';
@Component({
  selector: 'computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})

export class ComputerDetailComponent {
    @Input() computer: Computer;
}
