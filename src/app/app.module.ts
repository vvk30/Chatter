import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCnk17OWjytDF0gC5T5ADir_30pisCyqWQ",
    authDomain: "mychatapp-c01f6.firebaseapp.com",
    databaseURL: "https://mychatapp-c01f6.firebaseio.com",
    storageBucket: "mychatapp-c01f6.appspot.com",
    messagingSenderId: "524991244257"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
