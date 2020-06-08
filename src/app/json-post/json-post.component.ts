import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-json-post',
  templateUrl: './json-post.component.html',
  styleUrls: ['./json-post.component.css']
})
export class JsonPostComponent implements OnInit {

  response:[];
  displayError:boolean
  errorMessage: []
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      if(data.validatedResponse.error){
        this.displayError=true
        this.errorMessage=data.validatedResponse.error
      }
      else{
        this.response=this.route.snapshot.data['validatedResponse']
      }
    })
    
  }

}
