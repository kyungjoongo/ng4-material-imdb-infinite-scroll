import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';


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
