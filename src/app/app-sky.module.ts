import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyLabelModule
} from '@skyux/indicators';

import {
  SkyPageSummaryModule
} from '@skyux/layout';

import {
  SkyListModule
} from '@skyux/list-builder';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyAvatarModule,
    SkyI18nModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyPageSummaryModule
  ]
})
export class AppSkyModule { }
