import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyDlIPfhUMTjd2N-xSb5stL9jiJx-lqfSv0",
  authDomain: "ebook-a85f3.firebaseapp.com",
  databaseURL: "https://ebook-a85f3.firebaseio.com",
  projectId: "ebook-a85f3",
  storageBucket: "ebook-a85f3.appspot.com",
  messagingSenderId: "169842456947"
};

@NgModule({
  declarations: [
  MyApp,
  AboutPage,
  ContactPage,
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
  ContactPage,
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
