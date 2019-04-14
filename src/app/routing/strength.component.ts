import{Component, OnInit, Input} from "@angular/core";
import{User} from "./user.model";
@Component({
    selector:"str-we",
    templateUrl:"./strength.component.html",
    styleUrls:['./skill.component.css']
     
})
export class StrengthComp implements OnInit{
    user:User;
    title="Strength & Weekness";
     

ngOnInit(){}

}