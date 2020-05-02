export class AppareilService {
  appareils = [
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

  getAppareilById(id: number) {
    return this.appareils.find(
      (appareilObject)=> {
        return appareilObject.id === id;
      }
    );
  }

  switchOnAll() {

    for(let appareil of this.appareils) {
      appareil.status = true;
    }
  }

  switchOffAll() {

    for(let appareil of this.appareils) {
      appareil.status = false;
    }
  }

  switchAppareil(index : number) {
    this.appareils[index].status = !this.appareils[index].status;
  }
}
