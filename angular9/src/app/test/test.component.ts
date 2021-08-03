import { Component, OnInit, RendererFactory2 } from '@angular/core';


@Component({
  selector: 'angular9-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  render: any;
  constructor(
    private rendererFactory2: RendererFactory2
  ) {
    this.render = this.rendererFactory2.createRenderer(null, null);
  }

  ngOnInit() {
    console.log('init00000');
    this.render.listen('window', 'resize', () => {
      console.log('angular99999');
    });
    window.addEventListener('resize', () => {
      console.log('resize99999');
    });
  }
}
