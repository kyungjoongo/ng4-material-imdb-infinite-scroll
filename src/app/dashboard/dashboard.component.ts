import {Component, OnInit} from '@angular/core';
import {Router, Route, ActivatedRoute} from '@angular/router';
import {UserModel} from '../model/model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    image: string = '';
    email : string = '';
    constructor(public activatedroute: ActivatedRoute
        , public router: Router) {

        activatedroute.queryParams.subscribe(params=>{

            let email = params['email'];
            let image = params['image'];

            this.image = image;
            this.email = email;
            /*alert(image);
            alert(email);*/



        })

    }

    ngOnInit() {
    }

}
