import {
  NgModule
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [
    AddinClientService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
