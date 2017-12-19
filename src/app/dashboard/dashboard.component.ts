import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFireObject} from 'angularfire2/database';
import * as firebase from 'firebase';
import {DashboardDetailDialog, DialogOverviewExampleDialog} from '../common/common.component';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    color = 'warn';
    mode = 'indeterminate';
    value = 30;
    showSpinner = false;
    image: string = '';
    email: string = '';
    uid = '';
    provider = '';
    name = '';
    username: string = '';
    content: string;
    todos$: FirebaseListObservable<any[]>;


    constructor(public activatedroute: ActivatedRoute, public dialog: MatDialog
        , public router: Router, public af: AngularFireDatabase) {

    }

    ngOnInit() {
        this.getToDoList();
    }

    getToDoList()  {
        this.todos$ = this.af.list('/todos', {
            query: {
                orderByChild: 'date',
                limitToLast: 15
            }
        }).map(items => {
            return items.sort((a, b) => b.date - a.date)
        }) as FirebaseListObservable<any[]>;
    }



    clickEnter(event: any) {
        if (event.keyCode == 13) {
            this.addTodo();
        }
    }
/*
    goDetail(todo) {
        this.router.navigate(['/dashboard_detail', {key: todo.$key}]);
    }*/

    openDialog(todo): void {
        let dialogRef = this.dialog.open(DashboardDetailDialog, {
            width: '500px',
            data: {content: todo.content, username: todo.username, key : todo.$key, title: "수정폼"}
        });


        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });
    }

    message= '';

    addTodo() {
        const date2 = firebase.database.ServerValue.TIMESTAMP;

        if (this.content == '' || this.username ==''){
            this.message= '폼채우세요~'
            return false;
        }else{
            this.message= '';
        }

        this.showSpinner = true;
        var pushing = this.todos$.push({content: this.content, username: this.username, done: false, date: date2}).then(response => {

            console.log('#####################' + response);
            this.showSpinner = false;
        },reason => {

            console.log('애러네');

            alert('sdlfksdlkfksld');
            this.showSpinner= false;
        });









    }

    deleteTodo(todo: any): void {
        this.af.object('/todos/' + todo.$key).remove().then(response => {

            console.log('#########delete############' + response);
           // this.getToDoList();
        });
    }


    updateTodo2(todo: any, newValue: string): void {
        this.af.object('/todos/' + todo.$key)
            .update({content: newValue, done: todo.done});
    }


}
