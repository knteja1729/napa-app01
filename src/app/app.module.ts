import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { authInterceptorProviders } from './auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MatTableModule} from '@angular/material/table';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateMatrimonyProfileComponent } from './create-matrimony-profile/create-matrimony-profile.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';


@NgModule({
  declarations: [
    AppComponent,NavbarComponent,RegisterComponent, HomeComponent, LoginComponent, UserComponent, AdminComponent, ProfileComponent, AdminSidebarComponent, AdminHomeComponent, UserHomeComponent, UserSidebarComponent, EditProfileComponent, CreateMatrimonyProfileComponent, ChangePwdComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule
    
    
  ],
  providers: [RegisterService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
 
export class AppModule { }
