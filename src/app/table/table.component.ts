import {Component, Inject, OnInit} from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {


    displayedColumns = ['id', 'content'];
    dataSource =new MatTableDataSource();

    resultsLength = 0;
    isLoadingResults = false;
    isRateLimitReached = false;
    showSpinner = false;
    mode = 'indeterminate';

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(private http: Http,  private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

        let url= 'http://35.201.153.132:3000/proverbJson';

        this.showSpinner= true;
        this.http.get(url).map(response=>response.json()).subscribe(responseJson=>{
            console.log(responseJson);
            this.dataSource = new MatTableDataSource(responseJson);

            setTimeout(()=>{
                this.showSpinner = false;
            },1200);

        })
    }

    ngAfterViewInit() {

    }

    goToHead2(): void {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
        this.pageScrollService.start(pageScrollInstance);
    };
}

/*

export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}

export interface GithubIssue {
    created_at: string;
    number: string;
    state: string;
    title: string;
}

/!** An example database that the data source uses to retrieve data for the table. *!/
export class ExampleHttpDao {
    constructor(private http: HttpClient) {
    }

    getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        return this.http.get<GithubApi>(requestUrl);
    }
}
*/
