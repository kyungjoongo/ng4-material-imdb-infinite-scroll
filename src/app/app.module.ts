import {NgModule} from '@angular/core';
import {HttpService} from './services/http.service';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Page001Component} from './page001/page001.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardDetailDialog, DialogOverviewExampleDialog} from './common/common.component';
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
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {initializeApp} from 'firebase';
import { environment} from './common/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireDatabase} from 'angularfire2/database';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { ChipsComponent } from './chips/chips.component';
import { CovalentChipsModule} from '@covalent/core';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule, ButtonModule} from 'primeng/primeng';
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
        AppComponent,DashboardDetailDialog,
        Page001Component, DialogOverviewExampleDialog, Page002Component, Page003Component, LoginComponent, DashboardComponent, SignupComponent, TableComponent, DashboardDetailComponent, ChipsComponent
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
            {path: 'chips', component: ChipsComponent},
            {path: 'dashboard', component: DashboardComponent}



        ]), MatTabsModule, NgxPageScrollModule, MatFormFieldModule, MatInputModule
        , FormsModule, Angular2SocialLoginModule, AngularFontAwesomeModule, MatTableModule
        , AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule, AngularFirestoreModule, AngularFireDatabaseModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        // (optional) Additional Covalent Modules imports
        CovalentHttpModule.forRoot(),
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,CovalentChipsModule, AccordionModule, BrowserAnimationsModule, BrowserModule, SidebarModule,ButtonModule

    ],
    providers: [HttpService, UserService, AuthGuard, AngularFireDatabase],
    bootstrap: [AppComponent],
    entryComponents: [DialogOverviewExampleDialog, DashboardDetailDialog]
})
export class AppModule {
}



Angular2SocialLoginModule.loadProvidersScripts(providers);

