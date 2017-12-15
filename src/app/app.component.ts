import {Component, Inject} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {PageScrollConfig, PageScrollService, PageScrollInstance} from 'ngx-page-scroll';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('container')
    private container: ElementRef;
    title = '고경준 천재님 먹는 것을 아끼면 성공한다';

    constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {


    }

    items = [
        {id: 1, name: 'kyungjoon'}
        , {id: 2, name: 'kyungjoon2'}
        , {id: 3, name: 'kyungjoon3'}
        , {id: 4, name: 'kyungjoon4'}
        , {id: 5, name: 'kyungjoon5'}

    ];

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    public goToHead2(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: '#head2',
            pageScrollDuration: 550
        });
        this.pageScrollService.start(pageScrollInstance);
    };
}
