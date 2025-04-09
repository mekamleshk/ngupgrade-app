import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
import { legacyApp } from '../../../legacy/app.module.ajs';

@Component({
  selector: 'angular-component',
  template: `
    <div style="border: 2px solid blue; padding: 10px; margin: 10px;">
      <h3>Angular 17 Component</h3>
      <p>Hello from Angular 17!</p>
    </div>
  `
})
export class AngularComponent {}

// Downgrade component to AngularJS
legacyApp.directive('angularComponent', downgradeComponent({ component: AngularComponent }));