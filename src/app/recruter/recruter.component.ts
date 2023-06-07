import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css'],
})
export class RecruterComponent {
  allRecrues: Candidat[] = [];

  constructor(private recrueSer: ListRecruesService) {}

  ngOnInit() {
    this.allRecrues = this.recrueSer.getAllRecrues();
  }
}
