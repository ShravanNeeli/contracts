import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './header/new/new.component';
import { AuthComponent } from './sub-header/auth/auth.component';

const routes: Routes = [
  {path:'new',component:NewComponent},
  {path:'auth', component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
