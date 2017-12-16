import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string = 'lance77';
    password: string = '1114';

    constructor(public snackBar: MatSnackBar
        , public router: Router
        ,public localstorageservice  :LocalStorageService
    ) {
    }

    ngOnInit() {
    }

    message: String;

    logout(){

        this.localstorageservice.remove("sessionUsername");

        alert('세션해제됨');
    }

    clickedSubmit() {

        if (this.username == 'lance77' && this.password == '1114') {
            /*this.openSnackBar('맞았습니다', '');*/
            this.message = 'id/password ok!!';
            this.localstorageservice.set("sessionUsername", this.username);

            this.router.navigate(['/page1'])
        } else {
            this.message = 'id/password틀렸어용';
            return false;
        }

    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            panelClass: ['success-snackbar'],
            duration: 1000,
            verticalPosition: 'top'
        });
    }

}
