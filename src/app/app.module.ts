

import{FileSelectDirective} from "ng2-file-upload";

import{HttpClientModule} from "@angular/common/http";
import{AgmCoreModule} from '@agm/core';
import{ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';

import{NgModule} from "@angular/core";
import{BrowserModule} from "@angular/platform-browser";
import{profSkillComp} from "./routing/profskill.component";
import { FormsModule } from "@angular/forms";
import{ EduSkillComp} from "./routing/education.component";
import{AgGridModule} from "ag-grid-angular";
import{ SkillComp} from "./routing/skill.component";
import{StrengthComp} from "./routing/strength.component";
import {MatTableModule} from '@angular/material/table';
import{RouterModule, Routes} from "@angular/router";

import{QualitiesComp} from "./routing/qualities.component";

import * as $ from 'jquery';
import { StartComponent } from "./routing/start.component";

export const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'a',component:EduSkillComp},
  {path:'b',component:profSkillComp},
  {path:'c',component:QualitiesComp},
  {path:'d',component:SkillComp},
  {path:'e',component:StrengthComp},
  {path:'**',component:AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,StartComponent,
    FileSelectDirective,StrengthComp,SkillComp,QualitiesComp,profSkillComp,EduSkillComp
   
  ],
  imports: [
    BrowserModule,
   
    FormsModule,AgGridModule.withComponents([]),MatTableModule,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
