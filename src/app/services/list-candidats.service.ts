import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private allCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 52, 'directeur'),
    new Candidat(3, 'lisa', 'simpson', 18, 'etudiante', 'lisa.png'),
  ];

  constructor(private http: HttpClient) {}

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }

  getCandidatByIdAPI(id) {
    return this.http.get();
  }

  getAllCandidats() {
    return this.allCandidats;
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  addCandidat(newC) {
    newC._id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    this.allCandidats.push(newC);
  }

  deleteCandidat(dCand) {
    let i = this.allCandidats.indexOf(dCand);
    this.allCandidats.splice(i, 1);
  }

  updateCandidat(uCand) {
    let i = this.allCandidats.indexOf(uCand);
    this.allCandidats[i] = uCand;
  }
}
