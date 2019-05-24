import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public student = {  
    id: "",   
    name: "",   
    marks: ""  
   };  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.student.id=params.get('id');  
      this.student.name=params.get('name');  
    });  
    

  }

  

}


