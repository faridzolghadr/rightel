import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-entry-user',
  templateUrl: './entry-user.component.html',
  styleUrls: ['./entry-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryUserComponent implements OnInit {
  @Input('type') type: 'add' | 'edit' = 'add';
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
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
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
        firstName: this.entryForm.value.firstName!,
        lastName: this.entryForm.value.lastName!,
        email: this.entryForm.value.email!,
        password: this.entryForm.value.password!,
        active: true,
      }
      this.userService.entryUser(model, this.type);
      this.closeEntry.emit(model);
    }
  }

  private initialize() {
    if (this.type === 'edit') {
      this.id = this.dataReceive.id!;
      this.entryForm.patchValue({
        firstName: this.dataReceive.firstName,
        lastName: this.dataReceive.lastName,
        email: this.dataReceive.email,
        password: this.dataReceive.password
      });
      this.cdr.detectChanges();
    }
  }
}
