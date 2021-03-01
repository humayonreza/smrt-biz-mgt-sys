import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Router, RouterModule } from "@angular/router";
import { AgmCoreModule } from "@agm/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SpeechSynthesisModule } from "@kamiazya/ngx-speech-synthesis";
import { SliderModule } from "angular-image-slider";
import { SlickCarouselModule } from "ngx-slick-carousel";
import * as $ from "jquery";

import { MatNativeDateModule } from "@angular/material";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatStepperModule } from "@angular/material/stepper";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule } from "@angular/material/sort";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { HomeComponent } from "./static/home/home.component";
import { NavbarComponent } from "./dynamic/navbar/navbar.component";
import { MenuComponent } from "./dynamic/menu/menu.component";
import { MenudetailsComponent } from "./dynamic/menudetails/menudetails.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./dynamic/footer/footer.component";
import { MenusetupComponent } from "./dynamic/menusetup/menusetup.component";
import { ModalComponent } from "./dynamic/modal/modal.component";
import { TempComponent } from "./static/temp/temp.component";
import { AboutComponent } from "./static/about/about.component";
import { ContactComponent } from "./static/contact/contact.component";
import { LocationComponent } from "./static/location/location.component";
import { ReservationComponent } from "./dynamic/reservation/reservation.component";
import { TakeawayComponent } from "./dynamic/takeaway/takeaway.component";
import { NavbarsetupComponent } from "./dynamic/navbarsetup/navbarsetup.component";
import { ContsetupComponent } from "./dynamic/contsetup/contsetup.component";
// import { ContentsetupComponent } from './dynamic/contentsetup/contentsetup.component';

// ======================

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    MenudetailsComponent,
    FooterComponent,
    MenusetupComponent,
    ModalComponent,
    TempComponent,
    AboutComponent,
    ContactComponent,
    LocationComponent,
    ReservationComponent,
    TakeawayComponent,
    NavbarsetupComponent,
    ContsetupComponent,
    // ContentsetupComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SlickCarouselModule,
    SliderModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatStepperModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSortModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDialogModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SpeechSynthesisModule.forRoot({
      lang: "en",
      volume: 1.0,
      pitch: 2.0,
      rate: 1.5,
    }),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAfg8zhSwZoTzVK_QVt37pANL-KSOqE9mA",
    }),
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HomeComponent,
        },
        {
          path: "about-us",
          component: AboutComponent,
        },
        {
          path: "location",
          component: LocationComponent,
        },
        {
          path: "reservation",
          component: ReservationComponent,
        },
        {
          path: "takeaway",
          component: TakeawayComponent,
        },
        {
          path: "contact-us",
          component: ContactComponent,
        },
        {
          path: "menu",
          component: MenuComponent,
        },
        {
          path: "login",
          component: LoginComponent,
        },
        {
          path: "menu-setup",
          component: MenusetupComponent,
        },
        {
          path: "content-setup",
          component: ContsetupComponent,
        },
      ],
      { onSameUrlNavigation: "reload" }
    ),
  ],
  // enaircon
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
