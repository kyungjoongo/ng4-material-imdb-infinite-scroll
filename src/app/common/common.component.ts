import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {AngularFireObject} from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
    selector: 'dialog-overview-example-dialog',
    template: `
        <h2 mat-dialog-title>{{title}}</h2>
        <mat-dialog-content>{{imageName}}</mat-dialog-content>
        <mat-dialog-actions>
            <!--<button mat-button mat-dialog-close (click)="clickedNo()">No</button>-->
            <button mat-raised-button="" color="warn" [mat-dialog-close]="true" (click)="clickedYes()">Close</button>
        </mat-dialog-actions>
    `
})
export class DialogOverviewExampleDialog {

    name: string = '';
    animal: string = '';
    title: string = '';
    imageName: string = '';

    constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {

        this.name = data.name;
        this.animal = data.animal;
        this.title = data.title;
        this.imageName = data.imageName;

    }

    clickedNo() {
        this.dialogRef.close();
    }

    clickedYes() {
        console.log('yes------------>');
    }

}

@Component({
    selector: 'dashboard-detail-dialog',
    template: `
        <h2 mat-dialog-title>{{title}}</h2>
        <mat-dialog-content>
            <mat-form-field style="width: 100%">
                <input matInput placeholder="content" [(ngModel)]='content' name="content" value=""/>
            </mat-form-field>
            <br/>
            <mat-form-field style="width: 100%">
                <input matInput placeholder="username" [(ngModel)]='username' value="lance77" name=""/>
            </mat-form-field>


        </mat-dialog-content>
        <mat-dialog-actions>
            <!--<button mat-button mat-dialog-close (click)="clickedNo()">No</button>-->
            <button mat-raised-button="" color="primary" [mat-dialog-close]="true" (click)="clickSave()">수정</button>
            <button mat-raised-button="" color="warn" [mat-dialog-close]="true" (click)="clickedNo()">취소</button>
        </mat-dialog-actions>
    `
})
export class DashboardDetailDialog {

    username: string = '';
    content: string = '';
    key: string = '';
    title :string= '';


    constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>
        , @Inject(MAT_DIALOG_DATA) public data: any
        , public db: AngularFireDatabase) {

        this.username = data.username;
        this.content = data.content;
        this.key = data.key;

        /*alert(this.key);*/

    }

    clickedNo() {
        this.dialogRef.close();
    }

    clickSave() {
        this.db.object('/todos/' + this.key)
            .update({content: this.content, username: this.username}).then(reponse=>{
            //alert('save!');
        })

    }

}

