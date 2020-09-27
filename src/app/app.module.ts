import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { InformationPage } from "./../pages/information/information";

import { StudentPage } from "./../pages/student/student";
import { StudenttwoPage } from "./../pages/studenttwo/studenttwo";
import { TeachermenuPage } from "./../pages/teachermenu/teachermenu";
import { StudyplanPage } from "./../pages/studyplan/studyplan";

//----------
import { PublicizePage } from "./../pages/publicize/publicize";
import { NewsreleasePage } from "./../pages/newsrelease/newsrelease";
import { AddpublicizePage } from "./../pages/addpublicize/addpublicize";
import { UpdatenewsPage } from "./../pages/updatenews/updatenews";

//---------
import { ActivitynewsPage } from "./../pages/activitynews/activitynews";
import { ThactivitynewsPage } from "./../pages/thactivitynews/thactivitynews";
import { AddactivitynewsPage } from "./../pages/addactivitynews/addactivitynews";
import { UpdateactivityPage } from "./../pages/updateactivity/updateactivity";

//---------
import { IncludeplanPage } from "./../pages/includeplan/includeplan";
import { AddstudyplanPage } from "./../pages/addstudyplan/addstudyplan";
import { AddstudyplanonePage } from "./../pages/addstudyplanone/addstudyplanone";
//-------
import { IndexPage } from "./../pages/index/index";
import { ContactPage } from "../pages/contact/contact";
import { SearchPage } from "../pages/search/search";
import { TabsPage } from "../pages/tabs/tabs";
//-------

import { ShowstudyplanonePage } from "./../pages/showstudyplanone/showstudyplanone";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformationPage,
    PublicizePage,
    AddpublicizePage,
    NewsreleasePage,
    StudentPage,
    StudenttwoPage,
    TeachermenuPage,
    StudyplanPage,
    UpdatenewsPage,
    ActivitynewsPage,
    ThactivitynewsPage,
    AddactivitynewsPage,
    UpdateactivityPage,
    IncludeplanPage,
    AddstudyplanPage,
    AddstudyplanonePage,
    IndexPage,
    ContactPage,
    SearchPage,
    TabsPage,
    ShowstudyplanonePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformationPage,
    PublicizePage,
    AddpublicizePage,
    NewsreleasePage,
    StudentPage,
    StudenttwoPage,
    TeachermenuPage,
    StudyplanPage,
    UpdatenewsPage,
    ActivitynewsPage,
    ThactivitynewsPage,
    AddactivitynewsPage,
    UpdateactivityPage,
    IncludeplanPage,
    AddstudyplanPage,
    AddstudyplanonePage,
    IndexPage,
    ContactPage,
    SearchPage,
    TabsPage,
    ShowstudyplanonePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
