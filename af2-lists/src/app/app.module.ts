import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// AF2 Settings
export const firebaseConfig = {
/*
apiKey: "AIzaSyBjjjO3iW1l1tCQs_Ec7d8E2SWD6RCpm1k",
authDomain: "hair-53eb9.firebaseapp.com",
databaseURL: "https://hair-53eb9.firebaseio.com",
storageBucket: "hair-53eb9.appspot.com",
messagingSenderId: "763378280654"*/
apiKey: "AIzaSyDnAX0CQbbsMYuOTJ66ox_F0GwzPM4XPXY",
authDomain: "angularfire2-list-example.firebaseapp.com",
databaseURL: "https://angularfire2-list-example.firebaseio.com",
storageBucket: "",
messagingSenderId: "609067141823"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
