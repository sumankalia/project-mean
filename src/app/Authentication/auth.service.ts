import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from '../user.service';
// import { UserService } from 'src/app/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private injector: Injector , private userService: UserService) { }
  signupUser(firstName: string, lastname: string, email: string, gender: string, city: string, password: string){

  }

  intercept(req, next){
    let userService = this.injector.get(UserService);
    let tokenizedReq= req.clone({
      setHeaders: {
        Authorization: `Bearer ${ userService.getToken() }`
      }
    })
    return next.handle(tokenizedReq)
  }
}
