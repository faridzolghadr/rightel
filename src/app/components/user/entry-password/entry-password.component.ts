import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-entry-password',
  templateUrl: './entry-password.component.html',
  styleUrls: ['./entry-password.component.css']
})
export class EntryPasswordComponent implements OnInit {

  @Input('dataReceive') dataReceive: User = {
    id: '',
    active: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  @Output() closeEntry = new EventEmitter<User>();

  entryForm = this.formBuilder.group({
    password: ['', [Validators.required]]
  });
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.initialize()
  }

  onSaveChange() {
    if (this.entryForm.valid) {
      let model: User = {
        id: this.id && new Date().valueOf().toString(),
        firstName: this.dataReceive.firstName,
        lastName: this.dataReceive.lastName,
        email: this.dataReceive.email,
        password: this.entryForm.value.password!,
        active: this.dataReceive.active,
      }
      this.userService.entryUser(model, 'password');
      this.closeEntry.emit(model);
    }
  }

  private initialize() {
    this.id = this.dataReceive.id!;
    this.entryForm.patchValue({
      password: this.dataReceive.password
    });
    this.cdr.detectChanges();
  }

}
