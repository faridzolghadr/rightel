import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { EntryUserComponent } from './entry-user/entry-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryPasswordComponent } from './entry-password/entry-password.component';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  declarations: [UserComponent, EntryUserComponent, EntryPasswordComponent],
  exports: [UserComponent]
})
export class UserModule { }
