import { Injectable } from "@angular/core";
import { SkyAppConfig } from "@skyux/config";
import { SkyUIConfigService } from "@skyux/core";
import { Observable, of } from "rxjs";

const SETTINGS_KEY_PREFIX = "skyux-spa-payables";

@Injectable()
export class LocalStorageConfigService extends SkyUIConfigService {
  private envid: string = this.skyAppConfig.runtime.params.get("envid");

  constructor(private skyAppConfig: SkyAppConfig) {
    super();
  }

  public getConfig(key: string, defaultConfig?: any): Observable<any> {
    const settingsJSON = localStorage.getItem(
      `${SETTINGS_KEY_PREFIX}_${this.envid}_${key}`
    );
    if (settingsJSON) {
      return of(JSON.parse(settingsJSON));
    }
    return of(defaultConfig);
  }

  public setConfig(key: string, value: any): Observable<any> {
    localStorage.setItem(
      `${SETTINGS_KEY_PREFIX}_${this.envid}_${key}`,
      JSON.stringify(value)
    );

    return of();
  }
}
