import { Component, OnInit } from '@angular/core';
import { Card } from '../classes/card';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  // Component properties
  title : string;
  myFavCard : Card;
  cards : Array<Card>;

  constructor() { 
    this.title = 'Artifact Cards';
    this.cards = [new Card(10001, 'Venomancer'), 
                  new Card(10491, 'Venomous Nature'),
                  new Card(10002,'Sow Venom'),
                  new Card(10003,'Plague Ward'),
                  new Card(10004,'Meepo')];
    this.myFavCard = this.cards[0];
  }

  ngOnInit() {
  }

}
