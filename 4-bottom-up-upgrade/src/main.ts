import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {setUpLocationSync} from '@angular/router/upgrade';
import {Ng1AppModule} from './ng1-app/app';
import {Ng2AppModule} from './ng2-app/app';

platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  // bootstrap angular1
  upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  setUpLocationSync(upgrade);
});
