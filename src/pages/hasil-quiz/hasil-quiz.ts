import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

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

    @ViewChild('navbar') navBar: Navbar;
  	
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
    
    ionViewDidEnter() {
      this.navBar.backButtonClick = () => {
        console.log('bacbuttonclicked');
        this.navCtrl.setRoot(TabsPage);
        this.navCtrl.popToRoot();
      };

      console.log('ionViewDidEnter HasilQuizPage');
    }
}
