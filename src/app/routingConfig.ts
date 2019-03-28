
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/userdetails/userdetails.component';
import { UserprofileComponent } from './users/userprofile/userprofile.component';
import { ViewusersComponent } from './users/viewusers/viewusers.component';
import { DepartmentComponent } from './department/department.component';
import { ViewdepartmentComponent } from './department/viewdepartment/viewdepartment.component';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


export const appRoutes: Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        children:[
            {
                path: 'userdetails',
                component: UserDetailsComponent
            },
            {
                path: 'userprofile',
                component: UserprofileComponent
            },
            {
                path: 'viewusers',
                component: ViewusersComponent
            }
        ]
    },
    {
        path: 'department',
        component: DepartmentComponent,
        children:[
            {
                path : 'viewdepartment',
                component: ViewdepartmentComponent     
            },
            {
                path: 'adddepartment',
                component: AdddepartmentComponent
            }
        ]
    }, 
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
        ];

