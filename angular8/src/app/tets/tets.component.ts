import { Component, OnInit, RendererFactory2  } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-tets',
  templateUrl: './tets.component.html',
  styleUrls: ['./tets.component.css']
})
export class TetsComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  render: any;
  constructor(
    private rendererFactory2: RendererFactory2
  ) {
    this.render = this.rendererFactory2.createRenderer(null, null);
  }

  ngOnInit() {
    console.log('init');
    this.render.listen('window', 'resize', () => {
      console.log('angular888888');
    });
    window.addEventListener('resize', () => {
      console.log('resize888888');
    });
  }

}
