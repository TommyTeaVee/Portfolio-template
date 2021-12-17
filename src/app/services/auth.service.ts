import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  async login(loginInfo):Promise<any>{
   return await this.http.post('http://localhost:1337/api/auth/local', loginInfo).toPromise()
        .then((response:any) => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);


        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);

        });
  }

  async register(loginInfo):Promise<any>{
    return await this.http.post('http://localhost:1337/api/auth/local/register', loginInfo).toPromise()
         .then((response:any) => {
             // Handle success.
             console.log('Well done!');
             console.log('User profile', response.data.user);
             console.log('User token', response.data.jwt);


         })
         .catch(error => {
             // Handle error.
             console.log('An error occurred:', error.response);

         });
   }


}
