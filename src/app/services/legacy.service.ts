import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import { legacyApp } from '../../legacy/app.module.ajs';

@Injectable({ providedIn: 'root' })
export class LegacyService {
  getMessage() {
    return 'Data from Angular service!';
  }
}

// Downgrade service to AngularJS
legacyApp.factory('legacyService', downgradeInjectable(LegacyService));