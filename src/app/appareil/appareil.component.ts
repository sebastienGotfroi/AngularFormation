import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus ? 'Allumé' : 'Eteint';
  }

  getColor() {
    return this.appareilStatus ? 'green' : 'red';
  }

}
