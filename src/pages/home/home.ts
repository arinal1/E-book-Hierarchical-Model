import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	materi : Observable<any[]>;
	newItem = '';

	private currentColor: string
	constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
		this.materi = this.firebaseProvider.getMateri();
		this.currentColor = 'light';
	}

	addItem() {
		console.log(this.newItem);
		this.firebaseProvider.addItem(this.newItem);
	}

	removeItem(id) {
		this.firebaseProvider.removeItem(id);
	}

	goToMateriPage() {
		this.navCtrl.push("MateriPage");
		console.log("card clicked");
	}
}