import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { HeadComponentComponent } from './head-component/head-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskTableComponent,
    HeadComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
