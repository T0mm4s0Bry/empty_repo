import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypeDetailsComponent } from './type-details/type-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'type/:type', component: TypeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
