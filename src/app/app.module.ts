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
import {Page002Component} from './page002/page002.component';
import {Page003Component} from './page003/page003.component';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserService} from './services/user.service';
import {AuthGuard} from './guard/auth-guard.guard';
import {LocalStorageModule} from 'angular-2-local-storage';
import {Angular2SocialLoginModule} from 'angular2-social-login';
import {SignupComponent} from './signup/signup.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {TableComponent} from './table/table.component';
import {MatTableModule} from '@angular/material/table';

let providers = {
    'google': {
        'clientId': '574875960059-mkh0uvtsbe200mtfs63b84kujj6tsj1v.apps.googleusercontent.com'
    },
    'facebook': {
        'clientId': '18980271336',
        'apiVersion': 'v2.5' //like v2.4
    }
};


@NgModule({
    declarations: [
        AppComponent,
        Page001Component, DialogOverviewExampleDialog, Page002Component, Page003Component, LoginComponent, DashboardComponent, SignupComponent, TableComponent
    ],
    imports: [
        BrowserModule, HttpModule, HttpClientModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule, NoopAnimationsModule
        , NgbModule.forRoot(), MatGridListModule, MatSnackBarModule, InfiniteScrollModule, MatProgressSpinnerModule
        , LocalStorageModule.withConfig({
            prefix: 'kyungjoon-app',
            storageType: 'localStorage'
        }),
        RouterModule.forRoot([

            {path: '', component: LoginComponent},
            {path: 'page1', component: Page001Component, canActivate: [AuthGuard]},
            {path: 'page2', component: Page002Component, canActivate: [AuthGuard]},
            {path: 'page3', component: Page003Component, canActivate: [AuthGuard]},
            {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
            {path: 'logout', component: LoginComponent},
            {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}

        ]), MatTabsModule, NgxPageScrollModule, MatFormFieldModule, MatInputModule
        , FormsModule, Angular2SocialLoginModule, AngularFontAwesomeModule, MatTableModule


    ],
    providers: [HttpService, UserService, AuthGuard],
    bootstrap: [AppComponent],
    entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule {
}

Angular2SocialLoginModule.loadProvidersScripts(providers);
