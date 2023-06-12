import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NavdropDirective } from './shared/directives/navdrop.directive';
import { DashCardComponent } from './shared/components/dash-card/dash-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CardDesComponent } from './shared/components/card-des/card-des.component';
import { LoanIconComponent } from './shared/components/loan-icon/loan-icon.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { UserTableComponent } from './shared/components/user-table/user-table.component';
import { CreateUserComponent } from './shared/components/create-user/create-user.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective,
    NavdropDirective,
    DashCardComponent,
    CardDesComponent,
    LoanIconComponent,
    ChartComponent,
    UserTableComponent,
    CreateUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
