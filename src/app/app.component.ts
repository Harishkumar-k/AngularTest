import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firebaseConfig = {
        apiKey: "AIzaSyBQ3YtXbqMNcRFRHnOgXEmCCh2HK2Pcz28",
        authDomain: "mywebapp-a.firebaseapp.com",
        projectId: "mywebapp-a",
        storageBucket: "mywebapp-a.appspot.com",
        messagingSenderId: "191125709639",
        appId: "1:191125709639:web:fb556f37424d314f60a262",
        measurementId: "G-TK2KMWXQQB"
        };
  title = 'AngularTest';

  constructor(){
    let app = initializeApp(this.firebaseConfig);
    let analytics = getAnalytics(app);
  }
}
