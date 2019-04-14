import{Component, ViewChild} from "@angular/core";
import{AgGridNg2} from "ag-grid-angular";

@Component({
    selector:"edu-skill",
    templateUrl:"./education.component.html",
    styleUrls:['./aggrid.component.scss']
})
export class EduSkillComp {
    @ViewChild('agGrid') agGrid: AgGridNg2;
    title="keyskill";
    column=[
        {headerName:'Year',field:'year'},
        {headerName:'Qualification',field:'quali'},
        {headerName:'School/college',field:'college'},
        {headerName:'MarksObtained',field:'marks'}

    ];
    row=[
        
       {year:'2011-2013',quali:'10th(Seconday School)',college:'K.T Public School (CBSE Board)',marks:'10CGPA'},
      {year:'2013-2015',quali:'12th(Senior School)',college:'D.A.V Public School (CBSE Board)',marks:'77%'},
        {year:'2016-2020',quali:'BTech(Information Technology)',college:'Gautam Buddha University,Greater Noida 201301)',marks:'Avg 80%'}
      
  ];
}

