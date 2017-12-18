import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../services/http.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogOverviewExampleDialog} from '../common/common.component';
import {DOCUMENT} from '@angular/common';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-page001',
    templateUrl: './page001.component.html',
    styleUrls: ['./page001.component.css'],
})
export class Page001Component implements OnInit {
    @ViewChild('container')
    private container: ElementRef;

    color = 'warn';
    mode = 'indeterminate';
    value = 30;
    showSpinner = false;
    results = [];
    numbers = [];

    onScroll() {
        this.showSpinner = true;
        for (let i = 1; i <= 35; i++) {
            this.numbers.push(i);
        }
        /**
         * 1분 있다가 콜백안에 있는 구문을 실행.
         */
        setTimeout(() => {
            this.showSpinner = false;
        }, 1000);
    }


    constructor(private http: HttpService, public dialog: MatDialog
        , public snackBar: MatSnackBar
        , private pageScrollService: PageScrollService
        , @Inject(DOCUMENT) private document: any) {

        console.log("page0001------------------->");


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

    public goToHead2(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
        this.pageScrollService.start(pageScrollInstance);
    };

}
