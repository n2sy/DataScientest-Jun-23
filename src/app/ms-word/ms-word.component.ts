import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent {
  listFonts = ['', 'Garamond', 'Arial', 'Phosphate'];
  bg;
  cl;
  sz;
  ft;

  changeSize(inp) {
    console.log(inp.value);

    this.sz = `${inp.value}px`;
  }
}
