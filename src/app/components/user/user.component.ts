import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Cols, User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  passwordToggle: boolean = false;
  passwordEntrySection: User = {
    id: '',
    active: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  entryToggle: 'add' | 'edit' | 'no' = 'no';
  entrySection: User = {
    id: '',
    active: false,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  dataSource: User[] = [];
  cols: Cols[] = [
    { title: 'ردیف', cssClass: '' },
    { title: 'نام', cssClass: '' },
    { title: 'نام خانوادگی', cssClass: '' },
    { title: 'ایمیل', cssClass: '' },
    { title: 'وضعیت', cssClass: '' },
    { title: 'تنظیمات', cssClass: '' },
  ];

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.initialize();
  }

  identify(index: number, item: User) {
    return item.id;
  }

  onAddActivate() {
    this.entryToggle = 'add';
  }

  onEditHandle(user: User) {
    this.entrySection = { ...user };
    this.entryToggle = 'edit';
  }

  onPasswordHandle(user: User) {
    this.passwordEntrySection = { ...user };
    this.passwordToggle = true;
  }

  onActivateHandle(user: User) {
    this.userService.entryUser(user, 'activate')
  }

  onUpdateDataSource(user: User, type: 'password' | 'entry') {
    if (type === 'entry') {
      this.entryToggle = 'no';
      this.entrySection = {
        id: '',
        active: false,
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      }
    };

    if (type === 'password') {
      this.passwordToggle = false;
      this.passwordEntrySection = {
        id: '',
        active: false,
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      }
    }
    this.dataSource = [];
    this.dataSource = this.userService.getUsersList();
    this.cdr.detectChanges();
  }

  private initialize() {
    this.dataSource = this.userService.getUsersList();
  }
}
