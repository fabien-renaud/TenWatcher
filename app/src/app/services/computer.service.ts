import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

@Injectable()
export class ComputerService {
   constructor(private http: Http) { }

   getComputers() {
       return this.http.get(environment.api + '/computer')
           .map(res => res.json());
   }

   updateComputer(name) {
       return this.http.put(environment.api + '/computer', name)
           .map(res => res.json());
   }
}
