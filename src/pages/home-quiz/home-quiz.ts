import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HomeQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
  selector: 'page-home-quiz',
  templateUrl: 'home-quiz.html',
})
 export class HomequizPage {
  bab : Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.bab = this.firebaseProvider.getBab();
  }

  goToQuizPage(par1){
  	console.log('goToQuizPage');
  	this.navCtrl.push("QuizPage", {key : par1});
  }

}
