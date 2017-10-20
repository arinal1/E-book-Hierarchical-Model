import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd : AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getMateri(){
  	return this.afd.list('/materi/').valueChanges();
  }

  addItem(name) {
  	console.log("add");
    this.afd.list('/materi/').push(name);
  }
 
  removeItem(id) {
  	console.log('hapus!');
    // this.afd.list('/materi/').remove(id);
    this.afd.list('/materi/').remove('KwrTylxzfJFC1VhwZA5');
  }
}
