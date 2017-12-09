import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	bab : Observable<any[]>;
	private currentColor: string;
	
  	constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
  		this.bab = this.firebaseProvider.getBab();
		this.currentColor = 'light';
  	}

	goToMateriPage(par1, par2) {
		this.navCtrl.push("MateriPage", {key : par1, bab : par2});
		console.log("card clicked");
	}
}
