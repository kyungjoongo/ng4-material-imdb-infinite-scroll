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

    url = 'https://randomuser.me/api/?results=20&page=3';

    getProverbs() {

        return this.http.get('http://35.201.153.132:3000/proverbJson').map(response => {
  //          console.log('resppnse==>' + JSON.stringify(response));
            return response.json();
        });

    }

    getUserList(page){
        return this.http.get('https://randomuser.me/api/?results=50&page='+ page).map(res => {
//            console.log('resppnse==>' + JSON.stringify(res));
            return res.json();
        });
    }

    plxabayUri ='https://pixabay.com/api/?key=7259916-f3ce173538d4a7f0dee3e23a0&image_type=photo&pretty=true&page='

    getImages(page, pageSize:number=10) {

        let _category = [
            'fashion', 'nature', 'backgrounds', 'science', 'education', 'people', 'feelings'
            , 'religion', 'health', 'places', 'animals'
            , 'industry', 'food', 'computer', 'sports', 'transportation'
            , 'travel', 'buildings', 'business', 'music'
        ];
        var randCategory= _category[Math.floor(Math.random() * _category.length)];

        return this.http.get(this.plxabayUri + page + "&category="+ randCategory+ "&per_page="+ pageSize).map(res => {
            return res.json();
        }, err=>{
            alert(err);
        });
    }
}
