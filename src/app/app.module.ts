import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAjBr_edD0fgE9qIV6Q04DVTX7IBTIKMEU",
  authDomain: "herarchical-model-ebook-app.firebaseapp.com",
  databaseURL: "https://herarchical-model-ebook-app.firebaseio.com",
  projectId: "herarchical-model-ebook-app",
  storageBucket: "",
  messagingSenderId: "656625422544"
};

@NgModule({
  declarations: [
  MyApp,
  AboutPage,
  HomePage,
  TabsPage
  ],
  imports: [
  BrowserModule,
  HttpModule,
  AngularFireDatabaseModule,
  AngularFireModule.initializeApp(firebaseConfig),
  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  AboutPage,
  HomePage,
  TabsPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  FirebaseProvider
  ]
})
export class AppModule {}
