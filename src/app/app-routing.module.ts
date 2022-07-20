import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminGuard } from './admin.guards';
import { AdminComponent } from './admin/admin.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { CreateMatrimonyProfileComponent } from './create-matrimony-profile/create-matrimony-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NormalGuard } from './normal.guards';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },

  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },

  {
    path:'admin',
    component:AdminComponent,
    canActivate: [AdminGuard],
    
    children:[
      {
        path:'',
        component:AdminHomeComponent,
        
      },

      {
        path:'profile',
        component:ProfileComponent,
        
      },
      {
        path:'edit-profile',
        component:EditProfileComponent,
        
      },
      {
        path:'changepwd',
        component:ChangePwdComponent
      }
    ]
  },

  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },

  {
    path:'user',
    component:UserComponent,
    canActivate: [NormalGuard],
    
    children:[
      {
        path:'',
        component:UserHomeComponent,
        
      },

      {
        path:'profile',
        component:ProfileComponent,
        
      },
      {
        path:'edit-profile',
        component:EditProfileComponent,
        
      },
      {
        path:'matrimony-profile',
        component:CreateMatrimonyProfileComponent,
        
      },
      {
        path:'changepwd',
        component:ChangePwdComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
