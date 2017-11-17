import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HasilQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hasil-quiz',
  templateUrl: 'hasil-quiz.html',
})
export class HasilQuizPage {

	

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		
  	}
	

  	ngAfterViewInit(){
      let scoreEl = document.getElementById("score");
      let salahEl = document.getElementById("salah-number");
      let benarEl = document.getElementById("benar-number");

		  let i = 0;
		
		  let benar = 44;
		  let salah = 6;
		  let score = Math.round((benar/(benar+salah))*100);
		  
      salahEl.innerHTML = String(salah);
      benarEl.innerHTML = String(benar);

		  let interval = setInterval(function() {
        	
        	if ( i == score) clearInterval(interval);
        	
        	scoreEl.innerHTML = String(i);
        	i++;
    	}, 10);  				
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad HasilQuizPage');
  	}

}
