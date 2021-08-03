import { enableProdMode, NgModuleRef, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import 'zone.js/dist/zone';

if (environment.production) {
  enableProdMode();
}

// if (!(window as any).__POWERED_BY_QIANKUN__) {
//   platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .catch(err => console.error(err));
// }

// const { bootstrap, mount, unmount } = singleSpaAngular({
//   bootstrapFunction: singleSpaProps => {
//     singleSpaPropsSubject.next(singleSpaProps);
//     return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
//   },
//   template: '<app-root />',
//   Router,
//   NgZone,
// });
// export { bootstrap, mount, unmount };

let app: void | NgModuleRef<AppModule>;
async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  console.log(props);
}

export async function mount(props) {
  render();
}

export async function unmount(props) {
  console.log(props);
  // @ts-ignore
  app.destroy();
}
