export class UserModel {
/*

    constructor(public email: string
        , public idToken: string) {


    }
*/

    email: string = '';
    idToken: string = '';
    image: string = '';
    name: string = '';
    provider: string = '';
    token: string = '';
    uid: string = '';

}


export class Item {
    $key: string;
    title: string;
    body: string;
    timeStamp: number;
    active: boolean = true;
}
