import { Component, Input } from '@angular/core';

import { ExhibitItem } from './exhibit-item';

@Component({
  selector: 'exhibit-item-card',
  template: `
    <a href={{exhibitItem.url}}>
      <div class="thumbnail">
        <img src={{exhibitItem.thumb}} alt=""/>
        <div class="thumbnail-overlay">
          <span class="thumbnail-text">{{exhibitItem.title}}</span>
        </div>
      </div>
    </a>
  `
})

export class ExhibitItemCardComponent {
  @Input()
  exhibitItem: ExhibitItem;
}
