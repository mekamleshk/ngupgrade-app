import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { legacyApp } from './legacy/app.module.ajs';

import './legacy/components/angularjs-component/angularjs-component.component';
import { UpgradeModule } from '@angular/upgrade/static';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule);
  upgrade.bootstrap(document.body, [legacyApp.name], { strictDi: true });
});