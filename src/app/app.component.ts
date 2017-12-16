import {Component, Inject} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PageScrollConfig, PageScrollService, PageScrollInstance} from 'ngx-page-scroll';
import {LocalStorageService} from 'angular-2-local-storage';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('container')
    private container: ElementRef;
    title = '고경준 천재님 먹는 것을 아끼면 성공한다';

    isLogined: boolean = false;

    constructor(private pageScrollService: PageScrollService
        , @Inject(DOCUMENT) private document: any
        , public localstorageservice: LocalStorageService
        , public  router: Router
        , public snackBar: MatSnackBar) {

        console.log('this.localstorageservice.get(\'sessionUsername\')-->' + this.localstorageservice.get('sessionUsername'));


    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event.constructor.name === 'NavigationEnd') {
                console.log('this.localstorageservice.get(\'sessionUsername\')-->' + this.localstorageservice.get('sessionUsername'));
                if (this.localstorageservice.get('sessionUsername') != null) {
                    console.log('user connected ');
                    this.isLogined = true;
                } else {
                    this.isLogined = false;
                }
            }
        });
    }

    public goToHead() {

        let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: '#head2',
            pageScrollDuration: 550
        });
        this.pageScrollService.start(pageScrollInstance);
    };

    logout() {
        this.localstorageservice.remove('sessionUsername');
        this.openSnackBar('로그아웃되었습니다', '');
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            panelClass: ['success-snackbar'],
            duration: 1000,
            verticalPosition: 'top'
        });
    }
}
