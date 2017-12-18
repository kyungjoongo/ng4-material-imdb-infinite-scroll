import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFireObject} from 'angularfire2/database';
import * as firebase from 'firebase';


@Component({
    selector: 'app-dashboard-detail',
    templateUrl: './dashboard-detail.component.html',
    styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

    constructor(public activatedroute: ActivatedRoute
        , public router: Router, public af: AngularFireDatabase) {

        let key = this.activatedroute.snapshot.paramMap.get('key');

        alert(key);
    }


    ngOnInit() {
    }

}
