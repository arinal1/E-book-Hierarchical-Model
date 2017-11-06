import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()

  export class FirebaseProvider {
    link = this.afd.list('/materi/');
    item = [];

    constructor(public afd : AngularFireDatabase) {
    }

    getMateri(){
      console.log("GET!");
      this.link.snapshotChanges().subscribe(actions => {
        actions.forEach(action => {
          console.log(action.type);
          console.log(action.key);
          // console.log(action.payload.val());
          Object.keys(action.payload.val()).forEach(key=> {
            this.item.push(key);
          });
          console.log(this.item[1]);
        });
      });
      return this.link.snapshotChanges();
    }

    addItem(nama) {
      console.log("Tambah " + nama);
      this.link.push({nama: nama});
    }

    removeItem(key) {
      console.log("Hapus " + key);
      this.link.remove(key);
    }
  }