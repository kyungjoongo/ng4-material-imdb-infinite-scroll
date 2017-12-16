import {Component, Inject} from '@angular/core';
import {HttpService} from '../services/http.service';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-page003',
    templateUrl: './page003.component.html',
    styleUrls: ['./page003.component.css']
})
export class Page003Component  {
    page = 1;
    results = [];
    pageSize = 20;
    color = 'warn';
    mode = 'indeterminate';
    value = 30;
    showSpinner = false;
    results = [];

    constructor(public  httpService: HttpService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

        this.getImages();

    }

    getImages() {
        this.showSpinner = true;
        this.httpService.getImages(this.page, this.pageSize).subscribe(response => {
            console.log(response.hits);
            this.results = response.hits;
            this.page++;
            setTimeout(()=>{
                this.showSpinner = false;
            },1000);
        });
    }


    onScroll() {
        this.showSpinner = true;
        this.httpService.getImages(this.page, this.pageSize).subscribe(response => {
            console.log(response.hits);
            var _result =[];
            _result= response.hits;
            for ( let  i=0 ; i< _result.length;i++){
                this.results.push(_result[i])
            }

            this.page++;

            setTimeout(()=>{
                this.showSpinner = false;
            },1000);

        });

    }

    goToHead2(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
        this.pageScrollService.start(pageScrollInstance);
    };
}
