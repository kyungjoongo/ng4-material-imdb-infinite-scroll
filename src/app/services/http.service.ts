import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService {

    constructor(public http: Http, public httpClient: HttpClient) {


    }


    getProverbs() {

        return this.http.get('http://35.201.153.132:3000/proverbJson').map(response => {
            console.log('resppnse==>' + JSON.stringify(response));
            return response.json();
        });

    }

}
