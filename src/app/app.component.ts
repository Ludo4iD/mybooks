import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'apikey',
      authDomain: 'projectname.firebaseapp.com',
      databaseURL: 'https://projectname.firebaseio.com',
      projectId: 'projectname',
      storageBucket: 'projectname.appspot.com',
      messagingSenderId: '000000000000',
      appId: '0:000000000000:web:000000000000000'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
