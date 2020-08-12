import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { StaffComponent } from './staff/staff.component';
import { SAreaComponent } from './s-area/s-area.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'staff', component: StaffComponent },
  { path: 's-area', component: SAreaComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
