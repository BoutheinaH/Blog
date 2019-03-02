import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from '../core/auth.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],

  exports:[
    CommonModule,
    MaterialModule,
    NavbarComponent,
    FormsModule,
    RouterModule
  ],
  providers: [AuthService],
})
export class SharedModule { }
