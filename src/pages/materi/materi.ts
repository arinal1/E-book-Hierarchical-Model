import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {
	@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	halamanChange(){
		let currentHalaman = this.slides.getActiveIndex()+1;
	  	let el = document.getElementById("halaman");

		el.innerHTML = String(currentHalaman);
	}

	hideButton() {
		let backBtn = document.getElementById("back-btn");
  		let nextBtn = document.getElementById("next-btn");
  		let panjangSlides = this.slides.length();

  		if (this.slides.getActiveIndex() == 0){
  			backBtn.style.display = "none";
  		} else{
  			backBtn.style.display = "block";
  		}

  		if (this.slides.getActiveIndex() == panjangSlides-1) {
  			nextBtn.style.display = "none";
  		}else{
  			nextBtn.style.display = "block";
  		}

	}
  	nextSlide():void{
  		this.slides.slideNext();
  	}

  	prevSlide():void{
  		this.slides.slidePrev();
  	}

}
