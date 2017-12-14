import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '고경준 천재님 먹는 것을 아끼면 성공한다';

    items = [
        {id:1, name: 'kyungjoon'}
        ,{id:2, name: 'kyungjoon2'}
        ,{id:3, name: 'kyungjoon3'}
        ,{id:4, name: 'kyungjoon4'}
        ,{id:5, name: 'kyungjoon5'}

    ]
}
