import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeQuizPage');
  }

  goToQuizPage(){
  	console.log('goToQuizPage');
  	this.navCtrl.push('QuizPage');
  }

}
