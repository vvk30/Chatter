import { Component,Pipe } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  items: any
  name:any
  msgVal:string = ''
  constructor(private af: AngularFire){
    this.items = af.database.list('/messages',{
      query: {
        limitToLast: 7
      }
    }).map((array)=> array.reverse())
    this.af.auth.subscribe(auth=>{
      if(auth){
        this.name = auth
      }
    })
  }
  loginGl(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  }
  chatSend(theirMessage: string){
    this.items.push({
      message: theirMessage, name: this.name.google.displayName});
      this.msgVal = '';
    }
    logout() {
     this.af.auth.logout();
     location.reload();
  }
  }
