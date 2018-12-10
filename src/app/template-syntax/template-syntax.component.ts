import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent implements OnInit {

  // Component properties
  cardName : string;
  cardMiniImage: string;
  illustrator: string;
  showIllu: boolean;
  comment: string;
  
  constructor() {
    this.cardName = 'Skywrath Mage';
    this.cardMiniImage = 'https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062.320871aec38db2b973d6fa8933e62d3f44e8e407.png';
    this.illustrator = 'Greg Opalinski';
    this.showIllu = false;
    this.comment = '';
  }

  ngOnInit() {
  }
  
  showIllustrator() {
    this.showIllu = true;
  }

}
