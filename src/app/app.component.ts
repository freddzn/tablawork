import { Component, OnInit } from '@angular/core';
import { Characters } from './class';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

public camaleon:boolean=false;
public camaleon2:boolean=true;
public posts:any=[];
p:any;
public itempage=10;
public buscar:string=""

  constructor(private svc:ServiceService){


this.findinformation( )    
  }

  ngOnInit(): void {
    
  }
findinformation(){
this.svc.getInformation().subscribe((data:any) =>{ 
  this.posts=data
  console.log(this.posts);
  
for (let i = 0; i < this.posts.length; i++) {
  
  if(this.posts[i].completed === true){
    this.camaleon=true;
    

    

  }

  else this.camaleon2=false;
  
}
  
  
    
})

  
}
  
}
