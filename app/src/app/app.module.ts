import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { ComputerDetailComponent } from './computer-detail.component';
import { DataService } from './services/data.service';
import { ComputerService } from './services/computer.service';

@NgModule({
  declarations: [
    AppComponent,
    ComputerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule
  ],
  providers: [DataService, ComputerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
