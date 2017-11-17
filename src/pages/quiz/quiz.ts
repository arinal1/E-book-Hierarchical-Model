import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
  
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}
	
	ngAfterViewInit() {
    	// Component content has been initialized  	

  		let backBtn = document.getElementsByClassName("back-btn") as HTMLCollectionOf<HTMLElement>;
  		let nextBtn = document.getElementsByClassName("next-btn") as HTMLCollectionOf<HTMLElement>;

  		let lastNextBtn = nextBtn[nextBtn.length - 1];

  		backBtn[0].style.display = "none";
  		lastNextBtn.style.backgroundColor = "#E81209";
  		lastNextBtn.innerHTML = "Submit";

  		lastNextBtn.addEventListener('click', (event) => {
  			this.navCtrl.push("HasilQuizPage");
  		});

  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad QuizPage');
  	}

  	nextSlide():void{
  		this.slides.slideNext();
  	}

  	prevSlide():void{
  		this.slides.slidePrev();
  	}

}
