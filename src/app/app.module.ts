import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ApparelComponent } from './apparel/apparel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailabilityComponent,
    ApparelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
