import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { appRoutes } from './routingConfig';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BootstrapModalModule } from 'ng6-bootstrap-modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent} from './users/userdetails/userdetails.component';
import { UserprofileComponent } from './users/userprofile/userprofile.component';
import { ViewusersComponent } from './users/viewusers/viewusers.component';
import { DepartmentComponent } from './department/department.component';
import { ViewdepartmentComponent } from './department/viewdepartment/viewdepartment.component';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserService } from './user.service';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthService } from './Authentication/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    NavComponent,
    SidebarComponent,
    BodyComponent,
    FooterComponent,
    RegisterComponent,
    UsersComponent,
    UserDetailsComponent,
    UserprofileComponent,
    ViewusersComponent,
    DepartmentComponent,
    ViewdepartmentComponent,
    AdddepartmentComponent,
    HomeComponent,
    AboutComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,  { onSameUrlNavigation: 'ignore' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BootstrapModalModule,
    FontAwesomeModule
  ],
  providers: [UserService,
             {
               provide: HTTP_INTERCEPTORS,
               useClass: AuthService,
               multi: true
             }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
