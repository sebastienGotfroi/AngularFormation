import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name : 'Grille Pain',
      status : false
    },
    {
      name : 'Frigo',
      status : true
    },
    {
      name :'Télévision',
      status : true
    }
  ]

  constructor() {
    setTimeout(
      () => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {

  }
}
