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
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
