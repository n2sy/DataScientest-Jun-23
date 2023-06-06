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

  getAllCandidats() {
    return this.allCandidats;
  }

  addCandidat() {
    this.allCandidats.push(
      new Candidat(4, 'NEW', 'CANDIDAT', 18, 'etudiante', 'lisa.png')
    );
  }

  constructor() {}
}
