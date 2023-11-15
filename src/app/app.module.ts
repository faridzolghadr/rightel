import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './components/user/user.module';
import { AccountModule } from './components/account/account.module';
import { ExpenseModule } from './components/expense/expense.module';
import { BudgetModule } from './components/budget/budget.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AccountModule,
    ExpenseModule,
    BudgetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
