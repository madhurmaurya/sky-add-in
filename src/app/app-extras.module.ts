import { NgModule } from "@angular/core";
import { AddinClientService } from "@blackbaud/skyux-lib-addin-client";
// Specify entry components, module-level providers, etc. here.
import { AppSkyModule } from "./app-sky.module";
import { LocalStorageConfigService } from "./local-storage-config.service";

@NgModule({
  exports: [AppSkyModule],
  providers: [AddinClientService, LocalStorageConfigService],
  entryComponents: [],
})
export class AppExtrasModule {}
