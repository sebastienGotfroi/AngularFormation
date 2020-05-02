import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: boolean = false;

  constructor(private appareilService : AppareilService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const appareil: any = this.appareilService.getAppareilById(+id);

    if( appareil ) {
      this.name = appareil.name;
      this.status = appareil.status;
    }
    else {
      this.router.navigate(['/not-found']);
    }
  }

}
