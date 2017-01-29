import { Component }    from '@angular/core';

import { ExhibitItem }  from './exhibit-item';

const EXHIBIT_ITEMS: ExhibitItem[] = [
  { id: 11, title: 'Rhythm Heaven VR', subtitle: '', url: 'rhythm_heaven_vr.html', thumb: 'resources/images/rhythm_heaven_vr_thumb.png' }, 
  { id: 10, title: 'Raise The Sun', subtitle: '', url: 'rts.html', thumb: 'resources/images/raise_the_sun_thumb.png' }, 
  { id: 9, title: 'SDL on Mojo', subtitle: '', url: 'sdl_on_mojo.html', thumb: 'resources/images/sdl_on_mojo_thumb.png' }, 
  { id: 8, title: 'Scene Reconstruction', subtitle: '', url: 'scene_reconstruction.html', thumb: 'resources/images/scene_reconstruction_thumb.png' }, 
  { id: 7, title: 'Pixel Art', subtitle: '', url: 'pixel_art.html', thumb: 'resources/images/pixel_art_thumb.png' }, 
  { id: 6, title: 'Rhythm Heaven Android', subtitle: '', url: 'rhythm_heaven_android.html', thumb: 'resources/images/pixel_art_thumb.png' }, 
  { id: 5, title: 'Graphical', subtitle: '', url: 'graphical.html', thumb: 'resources/images/graphical_thumb.png' }, 
  { id: 4, title: 'Math \'n Splat', subtitle: '', url: 'math_n_splat.html', thumb: 'resources/images/math_n_splat_thumb.png' }, 
  { id: 3, title: 'Quack \'n Splat', subtitle: '', url: 'quack_n_splat.html', thumb: 'resources/images/quack_n_splat_thumb.png' }, 
  { id: 2, title: 'Future Star 32', subtitle: '', url: 'future_star_32.html', thumb: 'resources/images/future_star_32_thumb.png' }, 
  { id: 1, title: 'The Adventures of Bob', subtitle: '', url: 'the_adventures_of_bob.html', thumb: 'resources/images/the_adventures_of_bob_thumb.png' }, 
  { id: 0, title: 'Concepts and Experiments', subtitle: '', url: 'concepts_and_experiments.html', thumb: 'resources/images/banner.jpg' }
];

@Component({
  selector: 'my-app',
  template: `
    <navigation></navigation>
    <exhibit [exhibitItems]="exhibitItems"></exhibit>
  `,
})
export class AppComponent  { 
  exhibitItems = EXHIBIT_ITEMS;
}
