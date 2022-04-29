import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ApparelComponent } from './apparel/apparel.component';
import { FooterComponent } from './footer/footer.component';
import { AppareldetailsComponent } from './appareldetails/appareldetails.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailabilityComponent,
    ApparelComponent,
    FooterComponent,
    AppareldetailsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
