import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpService} from './services/http.service';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Page001Component} from './page001/page001.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DialogOverviewExampleDialog} from './common/common.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule} from '@angular/router';
import { Page002Component } from './page002/page002.component';
import { Page003Component } from './page003/page003.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
    declarations: [
        AppComponent,
        Page001Component, DialogOverviewExampleDialog, Page002Component, Page003Component
    ],
    imports: [
        BrowserModule, HttpModule, HttpClientModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule
        , NgbModule.forRoot(), MatGridListModule, MatSnackBarModule, InfiniteScrollModule, MatProgressSpinnerModule
        , RouterModule.forRoot([

            { path: '', component: Page001Component },
            { path: 'page2', component: Page002Component },
            { path: 'page3', component: Page003Component }


        ]), MatTabsModule, NgxPageScrollModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent],
    entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule {
}
