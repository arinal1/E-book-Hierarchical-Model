import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-home',
  templateUrl: 'quiz-home.html',
})
export class QuizHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizHomePage');
  }

  goToQuizPage(){
  	console.log('goToQuizPage');
  	this.navCtrl.push('QuizPage');
  }

}
