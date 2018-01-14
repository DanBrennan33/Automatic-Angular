import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Crono', desc: ''},
      { id: 11, name: 'Marle', desc: ''},
      { id: 13, name: 'Lucca', desc: ''},
      { id: 14, name: 'Frog', desc: ''},
      { id: 15, name: 'Robo', desc: ''},
      { id: 16, name: 'Ayla', desc: ''},
      { id: 17, name: 'Magus', desc: ''},
      { id: 18, name: 'Lavos', desc: ''},
      { id: 19, name: 'Gurus', desc: ''},
      { id: 20, name: 'Schala', desc: ''},
      { id: 21, name: 'Dalton', desc: ''},
      { id: 22, name: 'Zeal', desc: ''}
    ];
    return {heroes};
  }
}
