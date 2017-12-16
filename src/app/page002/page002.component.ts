import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-page002',
  templateUrl: './page002.component.html',
  styleUrls: ['./page002.component.css']
})
export class Page002Component implements OnInit {

  constructor(public httpService : HttpService) {
      this.getUserList();

  }

  ngOnInit() {
  }

  page = 1;
  results = [];

  getUserList(){

      this.httpService.getUserList(this.page).subscribe(response=>{

          console.log(response.results);
          this.results = response.results;
      })

  }

}
