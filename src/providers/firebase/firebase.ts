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
    
    constructor(public afd : AngularFireDatabase) {
    }

    getMateri(){
      console.log("GET!");
      console.log(this.link.snapshotChanges());
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