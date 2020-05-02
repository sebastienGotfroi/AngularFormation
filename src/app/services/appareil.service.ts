import { Subject } from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 0,
      name : 'Grille Pain',
      status : false
    },
    {
      id: 1,
      name : 'Frigo',
      status : true
    },
    {
      id:2,
      name :'Télévision',
      status : true
    }
  ];

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice())
  }

  getAppareilById(id: number) {
    return this.appareils.find(
      (appareilObject)=> {
        return appareilObject.id === id;
      }
    );
  }

  addAppareil(name:string, status:boolean) {
    const appareil = {
      id: this.appareils.length,
      name: name,
      status: status
    };
    
    this.appareils.push(appareil);
    this.emitAppareilSubject();
  }

  switchOnAll() {

    for(let appareil of this.appareils) {
      appareil.status = true;
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {

    for(let appareil of this.appareils) {
      appareil.status = false;
    }
    this.emitAppareilSubject();
  }

  switchAppareil(index : number) {
    this.appareils[index].status = !this.appareils[index].status;
    this.emitAppareilSubject();
  }
}
