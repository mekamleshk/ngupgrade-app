import { LegacyService } from '../../../app/services/legacy.service';
import { legacyApp } from '../../app.module.ajs';

export const AngularjsComponent = {
  template: `
    <div style="border: 2px solid red; padding: 10px; margin: 10px;">
      <h2>AngularJS Component</h2>
      <p>{{ $ctrl.message }}</p>
      <angular-component></angular-component>
    </div>
  `,
  controller: class {
    static $inject = ['legacyService'];
    message = '';
    constructor(legacyService: LegacyService) {
      this.message = legacyService.getMessage();
    }
  }
};

// Register component with AngularJS module
legacyApp.component('angularjsComponent', AngularjsComponent);