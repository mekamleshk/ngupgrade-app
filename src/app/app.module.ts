import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AngularComponent } from './components/angular-component/angular-component.component';
import { LegacyService } from './services/legacy.service';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [AngularComponent],
  providers: [LegacyService]
})
export class AppModule implements DoBootstrap {
  constructor() {}
  ngDoBootstrap() {}
}