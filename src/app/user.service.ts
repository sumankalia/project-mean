import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './models/user.model';




@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient){};
insertUsers(registerForm: any[]){
    return this.http.post('http://localhost:3000/users', registerForm)
    // return this.http.put('http://localhost:3000/users', registerForm)

}

fetchUsers(){
    return this.http.get<[]>('http://localhost:3000/users')
}

registerUser(userForm: any[]){
    return this.http.post('http://localhost:3000/registerdUser', userForm);
}

fetchRegister(){
    return this.http.get<[]>('http://localhost:3000/registerdUser');
}

// updateRegister(userForm: any[]){
//     return this.http.put('http://localhoshttpt:3000/registerdUser', userForm);
// }
httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
deleteRegister(id: number){
   
    // console.log(id);
   
    return this.http.delete('http://localhost:3000'+'/registerdUser/' + id, this.httpOptions)
  //  return this.http.delete('${http://localhost:3000/registerdUser}/${id}')
   
   // return this.http.delete('http://localhost:3000/registerdUser')
}
updateRegister(user: User){
return this.http.put('http://localhost:3000/registerdUser' + '/' + user.id, user );
}

getUserById(id) {
    return this.http.get('http://localhost:3000/registerdUser' + '/' + id);
  }

  // loggedIn(user){
  //   return localStorage.getItem('token');
  // }

  getToken  (){
    return  localStorage.getItem('token');
  }

  login(loginForm: any[]){
     return this.http.post('http://localhost:3000/login' , loginForm);
  }
}
