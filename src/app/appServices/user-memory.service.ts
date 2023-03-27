import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LocalUser } from '../appInterfaces/local-user';

@Injectable({
  providedIn: 'root'
})
export class UserMemoryService implements InMemoryDbService {
  createDb(){
    let heros = [
      {id: 1, name: 'John'}
    ]
    return heros
  }
// createDb(reqInfo?: RequestInfo):
//       Observable<PersonResponse>|Promise<PersonResponse>|PersonResponse {
//     const heroes = [
//       {id: 1, name: 'Windstorm'}, {id: 2, name: 'Bombasto'}, {id: 3, name: 'Magneta'},
//       {id: 4, name: 'Tornado'}
//     ];

//     const nobodies: any[] = [];

//     // entities with string ids that look like numbers
//     const stringers = [{id: '10', name: 'Bob String'}, {id: '20', name: 'Jill String'}];

//     // default returnType
//     let returnType = 'object';
//     // let returnType  = 'observable';
//     // let returnType  = 'promise';

//     // demonstrate POST commands/resetDb
//     // this example clears the collections if the request body tells it to do so
//     if (reqInfo) {
//       const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
//       if (body.clear === true) {
//         heroes.length = 0;
//         nobodies.length = 0;
//         stringers.length = 0;
//       }

//       // 'returnType` can be 'object' | 'observable' | 'promise'
//       returnType = body.returnType || 'object';
//     }
//     const db = {heroes, nobodies, stringers};

//     switch (returnType) {
//       case 'observable':
//         return of(db).pipe(delay(10));
//       case 'promise':
//         return new Promise(resolve => setTimeout(() => resolve(db), 10));
//       default:
//         return db;
//     }
// }
  // constructor(private http: HttpClient) {

  // }

  // getLocalUsers = async(

  // ) => {
  //   this.http
  //     .get(
  //       ''
  //     )
  //     .subscribe((value:Array<LocalUser> | any)=>{
  //       value.forEach(( user:any) => {
  //         console.log('Local user >>'+user)
  //       });
  //     })
  // }

  saveUserInfo = async(
    user: LocalUser
  ) => {


    let localUser: LocalUser = {
      _id : user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      secret: {
        token_id: user.secret.token_id,
        public_key: user.secret.public_key
      },
      provider: user.provider,
    }

    return localUser
  }

}
