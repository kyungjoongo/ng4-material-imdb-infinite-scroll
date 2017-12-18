import {Component, OnInit, HostBinding} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {LocalStorageService} from 'angular-2-local-storage';
import {AuthService} from 'angular2-social-login';
import {UserModel} from '../model/model';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

    username: string = 'lance77';
    password: string = '1114';

    email: string = '';
    idToken: string = '';
    image = '';
    _provider = '';
    token = '';
    uid = '';
    name = '';
    public userModel: UserModel;
    items: Observable<any[]>;


    constructor(public snackBar: MatSnackBar
        , public router: Router
        , public localstorageservice: LocalStorageService
        , public afAuth: AngularFireAuth
                ,public db : AngularFirestore
        , public _auth: AuthService) {


    }






    responesResult: any;

    signInWithSocial(provider) {
        this._auth.login(provider).map(response => response).subscribe(res => {
            this.responesResult = res;
            console.log(JSON.stringify(res) + '<---------------------');
            //user data
            //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google)
            this.localstorageservice.set('sessionUsername', this.responesResult.name);
            this.localstorageservice.set('sessionUserImage', this.responesResult.image);
            this.router.navigate(['/page1']);
        }, error2 => {

            console.log('애러다-->' + error2);
        });

    }

    logout2() {
        this._auth.logout().subscribe(response => {
            //return a boolean value.}
            alert(response);
        });
    }


    ngOnInit() {

        //  AppGlobals.GOOGLE_CLIENT_ID = '574875960059-mkh0uvtsbe200mtfs63b84kujj6tsj1v.apps.googleusercontent.com';
    }

    message: String;

    logout() {

        this.localstorageservice.remove('sessionUsername');

        alert('세션해제됨');
    }

    clickedSubmit() {

        if (this.username == 'lance77' && this.password == '1114') {
            /*this.openSnackBar('맞았습니다', '');*/
            this.message = 'id/password ok!!';
            this.localstorageservice.set('sessionUsername', this.username);
            this.router.navigate(['/page1']);
        } else {
            this.message = 'id/password틀렸어용';
            return false;
        }

    }

    /*loginWithGoogle(){
        this.googleAuthSvc.authenticateUser(response=>{
            console.log('############');
            console.log(response+ "sdlkfldk########")
        })
    }
*/
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            panelClass: ['success-snackbar'],
            duration: 1000,
            verticalPosition: 'top'
        });
    }

}
