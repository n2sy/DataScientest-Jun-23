import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {
  constructor() {}

  afficherInfos() {
    console.log('Je suis le premier service !');
  }
}
