import {Component, Inject, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialog} from '../common/common.component';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material';

@Component({
    selector: 'app-page001',
    templateUrl: './page001.component.html',
    styleUrls: ['./page001.component.css'],
})
export class Page001Component implements OnInit {
    color = 'primary';
    mode = 'indeterminate';
    /*mode = 'determinate';*/
    value = 30;
    showSpinner = false;


    results = [];
    numbers = [];

    onScroll() {




        this.showSpinner = true;
        for (let i = 1; i <= 35; i++) {
            this.numbers.push(i);
        }

        setTimeout(()=>{
            this.showSpinner = false;
        },1000);



    }

    constructor(private http: HttpService, public dialog: MatDialog
        , public snackBar: MatSnackBar) {
        this.http.getProverbs().subscribe(response => {
            this.results = response;
        });

        this.numbers = this.oneTo20();

    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            panelClass: ['success-snackbar'],
            duration: 1000,
            verticalPosition: 'top'

        });
    }

    btnClicked() {
        alert('sdlfksdlkfsdlkf');
    }

    clickedPoster() {

        alert('sdlfksdlkf');
    }

    oneTo20() {
        let res = [];
        for (let i = 1; i <= 35; i++) {
            res.push(i);
        }
        return res;
    }


    animal: string;
    name: string;

    openDialog(title, index): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {name: '고경준!!', animal: '시츄입니다', title: title, imageName: this.numbers[index]}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }


    ngOnInit() {
    }

}
