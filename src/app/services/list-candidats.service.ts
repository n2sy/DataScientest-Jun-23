import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'directeur'),
    new Candidat(3, 'lisa', 'simpson', 18, 'etudiante', 'lisa.png'),
  ];

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }

  getAllCandidats() {
    return this.allCandidats;
  }

  addCandidat(newC) {
    newC._id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    this.allCandidats.push(newC);
  }

  constructor() {}
}
