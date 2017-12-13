import { Component } from '@angular/core';
import { App, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, app: App, alertCtrl:AlertController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.backgroundColorByHexString('#f77074');
      splashScreen.hide();

      //let nav = app.getActiveNavs()[0];
      //let activeView = nav.getActive();
      //let nameActiveView = activeView.name;
      //console.log(nav);
    });

    platform.registerBackButtonAction(() => {
      let nav = app.getActiveNavs()[0];
      let activeView = nav.getActive();

      if (activeView.name === "QuizPage") {

        //do nothing here to disable hardware back button 
        
      } else {

        if (nav.canGoBack()) {
          
          nav.pop();

        } else {

          const alert = alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
              }
            },
            {
              text: 'Close App',
              handler: () => {
                platform.exitApp();
              }
            }]
          });

          alert.present();
        }
      }

    }, 100);
  }
}
