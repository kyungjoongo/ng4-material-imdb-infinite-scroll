import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';
import {LocalStorageService} from 'angular-2-local-storage';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, public snackBar: MatSnackBar
        , public localstorageservice: LocalStorageService) {
    }
    canActivate(next: ActivatedRouteSnapshot
        , state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.localstorageservice.get('sessionUsername')) {
            return true;
        } else {
            this.openSnackBar('로그인이 필요합니다', '');
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
