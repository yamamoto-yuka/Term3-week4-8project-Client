import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApparelComponent } from './apparel/apparel.component';

const routes: Routes = [{ path: 'apparel', component: ApparelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
