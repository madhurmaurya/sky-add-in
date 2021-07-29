import { NgModule } from "@angular/core";
import { SkyAvatarModule } from "@skyux/avatar";
import { SkyNumericModule } from "@skyux/core";
import {
  SkyDatepickerModule,
  SkyDatePipeModule,
  SkyDateRangePickerModule,
} from "@skyux/datetime";
import { SkyErrorModule } from "@skyux/errors";
import {
  SkyCheckboxModule,
  SkyFileAttachmentsModule,
  SkyRadioModule,
} from "@skyux/forms";
import { SkyAuthHttpClientModule } from "@skyux/http";
import { SkyI18nModule } from "@skyux/i18n";
import {
  SkyAlertModule,
  SkyHelpInlineModule,
  SkyIconModule,
  SkyKeyInfoModule,
  SkyLabelModule,
  SkyStatusIndicatorModule,
  SkyTextHighlightModule,
  SkyTokensModule,
  SkyWaitModule,
} from "@skyux/indicators";
import { SkyDescriptionListModule, SkyFluidGridModule } from "@skyux/layout";
import { SkyConfirmModule, SkyModalModule } from "@skyux/modals";
import { SkyDropdownModule, SkyPopoverModule } from "@skyux/popovers";
import { SkyAppLinkModule } from "@skyux/router";

@NgModule({
  exports: [
    SkyFluidGridModule,
    SkyAlertModule,
    SkyAppLinkModule,
    SkyAuthHttpClientModule,
    SkyAvatarModule,
    SkyCheckboxModule,
    SkyConfirmModule,
    SkyDatepickerModule,
    SkyDatePipeModule,
    SkyDropdownModule,
    SkyErrorModule,
    SkyFileAttachmentsModule,
    SkyHelpInlineModule,
    SkyI18nModule,
    SkyIconModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyModalModule,
    SkyNumericModule,
    SkyPopoverModule,
    SkyRadioModule,
    SkyStatusIndicatorModule,
    SkyTokensModule,
    SkyWaitModule,
    SkyTextHighlightModule,
    SkyDateRangePickerModule,
    SkyDescriptionListModule,
  ],
})
export class AppSkyModule {}
