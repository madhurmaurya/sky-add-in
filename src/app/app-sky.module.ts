import {
  NgModule
} from '@angular/core';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAlertModule
} from '@skyux/indicators';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyI18nModule
  ]
})
export class AppSkyModule { }
