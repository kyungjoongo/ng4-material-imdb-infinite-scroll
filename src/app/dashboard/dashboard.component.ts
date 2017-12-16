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
    email: string = '';
    uid= '';
    provider= '';
    name= '';

    constructor(public activatedroute: ActivatedRoute
        , public router: Router) {

        activatedroute.queryParams.subscribe(params => {

            this.email = params['email'];
            this.image = params['image'];
            this.uid = params['uid'];
            this.provider = params['provider'];
            this.name = params['name'];

            /*alert(image);
            alert(email);*/


        });

    }

    ngOnInit() {
    }

}
