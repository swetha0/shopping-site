import { AngularFireAuthModule } from '@angular/fire/auth';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// App components
import { AppComponent } from './app.component';
// App routing modules
// import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
// Auth service
// import { AuthService } from './Auth_1/shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
// import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
// import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
// Reactive Form
// import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
// import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
// import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCardModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatProgressSpinnerModule,
         MatTableModule,
         MatExpansionModule,
         MatSelectModule,
         MatSnackBarModule,
         MatTooltipModule,
         MatChipsModule,
         MatListModule,
         MatSidenavModule,
         MatTabsModule,
         MatProgressBarModule,
         MatCheckboxModule,
         MatSliderModule,
         MatRadioModule,
         MatDialogModule,
         MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';


import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ToastaModule } from 'ngx-toasta';
import { BidiModule } from '@angular/cdk/bidi';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SlickCarouselModule } from 'ngx-slick-carousel';



import { AppRoutes } from './app-routing';
import { GlobalModule } from './Global/Global.module';
import { TemplatesModule } from './Templates/Templates.module';
import { MenuItems } from './Core/menu/menu-items/menu-items';

import { EmbryoService } from './Services/Embryo.service';


import { MainComponent } from './Main/Main.component';
import { HeaderOneComponent } from './Layouts/Header/HeaderOne/HeaderOne.component';
import { HeaderTwoComponent } from './Layouts/Header/HeaderTwo/HeaderTwo.component';
import { HeaderThreeComponent } from './Layouts/Header/HeaderThree/HeaderThree.component';
import { FooterOneComponent } from './Layouts/Footer/FooterOne/FooterOne.component';
import { FooterTwoComponent } from './Layouts/Footer/FooterTwo/FooterTwo.component';
import { MenuComponent } from './Layouts/Menu/Menu/Menu.component';
import { HomeoneComponent } from './Pages/Home/HomeOne/HomeOne.component';
import { HomeTwoComponent } from './Pages/Home/HomeTwo/HomeTwo.component';
import { HomeThreeComponent } from './Pages/Home/HomeThree/HomeThree.component';
import { CartComponent } from './Pages/Cart/Cart.component';
import { NotFoundComponent } from './Pages/NotFound/NotFound.component';
import { SideBarMenuComponent } from './Layouts/Menu/SidebarMenu/SidebarMenu.component';
import { PaymentDetailSideBarComponent } from './Layouts/PaymentDetailSideBar/PaymentDetailSideBar.component';
import { FixedHeaderComponent } from './Layouts/Header/FixedHeader/FixedHeader.component';
import { SessionModule } from './Pages/Session/Session.module';


/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeoneComponent,
    HeaderOneComponent,
    FooterOneComponent,
    MenuComponent,
    SideBarMenuComponent,
    CartComponent,
    NotFoundComponent,
    PaymentDetailSideBarComponent,
    HomeTwoComponent,
    HeaderTwoComponent,
    FooterTwoComponent,
    HomeThreeComponent,
    HeaderThreeComponent,
    FixedHeaderComponent,
   //  SignInComponent,
    // SignUpComponent,
    // DashboardComponent,
   //  ForgotPasswordComponent,
    // VerifyEmailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'embryo-seo-pre'}),
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    GlobalModule,
    TemplatesModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    LoadingBarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'shoppingproject'),
    AngularFirestoreModule,
    // AppRoutingModule1,
    SessionModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    ToastaModule.forRoot(),
    BidiModule,
    TranslateModule.forRoot({
       loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
       }
    }),
    SlickCarouselModule
  ],
   providers: [
      MenuItems,
      EmbryoService,
      // AuthService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
