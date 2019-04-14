import { Component,OnInit } from '@angular/core';
import{Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
     
    name="Angular6";
      urls= [];
  header="ABOUT ME";
  title="TO KNOW MORE ABOUT ME";
  education1="EDUCATION";
  education2="THE ONLY THINGS THAT INTERFERES WITH MY LEARNING IS MY EDUCATION.";
  skill1="SKILLS";
  skill2="Things I've picked up over the years";

fileToUpload:File=null;
  
  imageUrl:string ="assets/image/camera.png";
  User: any;
  routes: any;
  
   
  handleFileInput(file:FileList){

    this.fileToUpload=file.item(0);

  var reader=new FileReader();
  reader.onload=(event:any)=> {
    this.imageUrl=event.target.result;

  }

  reader.readAsDataURL(this.fileToUpload);
  }

onClick(){
  $("#image1").click(function () {
    $("#image2").trigger('click');
});

}
multiClass={
  
  'line1':true,
  'link a':true,

}

aboutClass={
  'about':true,
  'about h1':true,
  'about h5':true,
  'line':true,
  'about p':true,
}
eductionClass={
  'education h1':true,
  'education h5':true,
  'education':true,
}
certifiedClass={
  'certified':true,
  'certified h1':true,
  'line':true,
  'input[type=file]':true
}

onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }
}
constructor(private router:Router){}
 go(){
  this.router.navigate(["./c"],{queryParams:{id:'3',popular:"third"}});
 } 
}


