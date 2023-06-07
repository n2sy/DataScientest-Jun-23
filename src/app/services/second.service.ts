import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  afficherSecondService() {
    console.log('Et moi, je suis le second service');
  }
}
