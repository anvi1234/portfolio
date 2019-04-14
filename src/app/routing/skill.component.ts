import{Component} from "@angular/core";
export interface skillname {
    language: string;
    position: number;
    skill: string;
    
  }
  
  const Skill_name: skillname[] = [
   {position:1,language:'Programming Language',skill:'Core Java,C.'},
   {position:2,language:'Web Technology language',skill:'HTML5,CSS,PHP,JavaScript,MySql,Angular6,Node.js'},
   {position:3,language:'Operating System',skill:'Windows,LinuxMint,Kali Linux'},
   {position:4,language:'Cyber Security',skill:'Begginer of Ethical Hacking'},
  ];

@Component({
    selector:"skill",
    templateUrl:"./skill.component.html",
    styleUrls:['./skill1.component.css']
     
})
export class SkillComp{
    title="KeySkill";
    displayedColumns: string[] = ['position', 'language', 'skill'];
  dataSource =Skill_name;
       
        
        

}