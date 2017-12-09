import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()

  export class FirebaseProvider {
    // opsi = [];

    constructor(public afd : AngularFireDatabase) {
    }

    getMateri(id){
      console.log("GET MATERI");
      return this.afd.list('/bab/' + id + '/materi/halaman').snapshotChanges();
    }

    getBab(){
      console.log("GET BAB ");
      return this.afd.list('/bab/').snapshotChanges();
    }

    getKuis(id){
       return this.afd.list('/bab/' + id + "/kuis").snapshotChanges();
    }

    getOpsi(id, no){
       return this.afd.list('/bab/' + id + "/kuis/" + no + "/opsi").snapshotChanges();
    }
  }