import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
        apiKey: "AIzaSyCO6h8gfZWiIMHja-CXuYev4ztbNsLv9TI",
        authDomain: "library-b1679.firebaseapp.com",
        databaseURL: "https://library-b1679.firebaseio.com",
        projectId: "library-b1679",
        storageBucket: "library-b1679.appspot.com",
        messagingSenderId: "803313774503",
        appId: "1:803313774503:web:df4c82e6ca6484b6"
      };
      firebase.initializeApp(config); 
    }
  }

