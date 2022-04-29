import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApparelComponent } from './apparel/apparel.component';
import { AppareldetailsComponent } from './appareldetails/appareldetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apparel', component: ApparelComponent },
  { path: 'apparel/:id', component: AppareldetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
