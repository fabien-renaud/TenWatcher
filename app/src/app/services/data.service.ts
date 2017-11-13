import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Data } from '../data';
import { Datasets } from '../data';

@Injectable()
export class DataService {
   constructor(private http: Http) { }

   getDatas(mac) {
       return this.http.get(environment.api + '/data', {params: { mac: mac }})
           .map(res => res.json());
   }

   prepareDatas(datas) {
       var cpuset:Datasets = {data:[], label:'CPU Usage'};
       var ramset:Datasets = {data:[], label:'RAM USAGE'};
       var labels = [];
       datas.forEach(function(data) {
         cpuset.data.push(data.cpu);
         ramset.data.push(data.ram);
         labels.push(data.date);
       })

       var response:Data = {datasets:[cpuset, ramset], labels:labels};

       return response;
   }
}
