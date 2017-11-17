import { Component, Input } from '@angular/core';

import { Computer } from './computer';
import { Data } from './data';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})

export class ComputerDetailComponent {
    @Input() computer: Computer;
    @Input() data: Data;

    chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(253,93,93,0.3)',
      borderColor: 'rgba(253,93,93,0.8)',
      pointBackgroundColor: 'rgba(253,93,93,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(253,93,93,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(238,157,76,0.3)',
      borderColor: 'rgba(238,157,76,0.8)',
      pointBackgroundColor: 'rgba(238,157,76,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(238,157,76,0.2)'
    }];

    chartOptions: any = {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              min: new Date(2017, 10, 13, 3, 29, 0),
              max: new Date(2017, 10, 13, 3, 29, 36),
              unit: 'second',
              displayFormats: 'DD MMM YYYY - h:mm:ss',
              stepSize: 300
            }
          }]
        }
    };

    // changeDate() {
    //   let lastestValue = new Date(this.data.labels[this.data.labels.length-1]);
    //   this.chartOptions.scales.xAxes[0].time.min = lastestValue;
    //   this.chartOptions.scales.xAxes[0].time.max = lastestValue;
    //   this.chartOptions = Object.assign({}, this.chartOptions);
    // }
}
