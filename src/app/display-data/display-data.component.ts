import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  // Component properties
  title : string;
  myFavCard : string;
  cards : Array<string>;

  constructor() { 
    this.title = 'Artifact Cards';
    this.cards = ['Venomancer', 'Venomous Nature', 'Sow Venom', 'Plague Ward', 'Meepo'];
    this.myFavCard = this.cards[0];
  }

  ngOnInit() {
  }

}
