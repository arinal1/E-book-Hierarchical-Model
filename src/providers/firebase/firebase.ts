import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()

  export class FirebaseProvider {
    item = [];
    bab1 = [];

    constructor(public afd : AngularFireDatabase) {
    }

    getMateri(){
      console.log("GET MATERI");
      this.afd.list('/materi/').snapshotChanges().subscribe(actions => {
        actions.forEach(action => {
          Object.keys(action.payload.val()).forEach(key=> {
            this.item.push(key);
          });
          console.log(this.item[1]);
        });
      });
      return this.afd.list('/materi/').snapshotChanges();
    }

    getBab(id){
      console.log("GET BAB " + id);
      return this.afd.list('/materi/' + id + '/halaman').snapshotChanges();
    }
  }