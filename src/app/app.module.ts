import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { LOCALE_ID } from "@angular/core";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";

import { TabsPage } from "../pages/tabs/tabs";
import { CategoryPage } from "../pages/category/category";
import { TripPage } from "../pages/trip/trip";
import { AmountPage } from "../pages/amount/amount";
import { ExpensePage } from "../pages/expense/expense";
import { ConfirmationPage } from "../pages/confirmation/confirmation";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { File } from "@ionic-native/file";

import { ProgressBarComponent } from "../components/progress-bar/progress-bar";

import { CategoryProvider } from "../providers/category/category.provider";
import { TripProvider } from "../providers/trip/trip.provider";
import { ExpenseProvider } from "../providers/expense/expense.provider";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    MyApp,
    ProgressBarComponent,
    TabsPage,
    CategoryPage,
    TripPage,
    AmountPage,
    ExpensePage,
    ConfirmationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      monthNames: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ],
      monthShortNames: ["Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"],
      dayNames: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
      dayShortNames: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, CategoryPage, TripPage, AmountPage, ExpensePage, ConfirmationPage],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "fr-FR" },
    CategoryProvider,
    TripProvider,
    ExpenseProvider
  ]
})
export class AppModule {}
