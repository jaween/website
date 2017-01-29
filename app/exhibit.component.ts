import { Component, Input } from '@angular/core';

import { ExhibitItem } from './exhibit-item';

@Component({
  selector: 'exhibit',
  template: `
    <div class="content">
      <span *ngFor="let item of exhibitItems">
		<exhibit-item-card [exhibitItem]="item"></exhibit-item-card>
      </span>
    </div>
  `
})

export class ExhibitComponent {
  @Input()
  exhibitItems: ExhibitItem[];
}
