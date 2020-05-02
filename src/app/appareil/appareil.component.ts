import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : boolean;
  @Input() indexOfAppareil : number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus ? 'Allumé' : 'Eteint';
  }

  getColor() {
    return this.appareilStatus ? 'green' : 'red';
  }

  switchAppareil() {
    this.appareilService.switchAppareil(this.indexOfAppareil);
  }

}
