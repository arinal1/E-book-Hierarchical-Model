import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
 export class QuizPage {

   @ViewChild(Slides) slides : Slides;
   kuis : Observable<any[]>;
   id = "";
   answer = [];

   constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.id = navParams.get("key");
    this.kuis = this.firebaseProvider.getKuis(this.id);
  }

  ngAfterViewChecked() {
      
      let backBtn = document.getElementsByClassName("back-btn") as HTMLCollectionOf<HTMLElement>;
      let nextBtn = document.getElementsByClassName("next-btn") as HTMLCollectionOf<HTMLElement>;

      if (backBtn.length && nextBtn.length > 0 ) {
      
        let lastNextBtn = nextBtn[nextBtn.length - 1];
       
        backBtn.item(0).style.display = "none";
        lastNextBtn.style.backgroundColor = "#E81209";
        lastNextBtn.innerHTML = "Submit";

        lastNextBtn.addEventListener('click', (event) => {
          this.navCtrl.push("HasilQuizPage");
        });
      }
  }

  nextSlide():void{
    this.slides.slideNext();
  }

  prevSlide():void{
    this.slides.slidePrev();
  }

  answerFunc(jawab){
    console.log(jawab);
    // this.answer[0] = jawab;
  }
}