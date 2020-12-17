import {
  Component, Input, OnInit
} from '@angular/core';
import { AddinClientService, AddinEvent } from '@blackbaud/skyux-lib-addin-client';
import { AddinClientInitArgs } from '@blackbaud/sky-addin-client';

let jwtDecode = require('jwt-decode');

@Component({
  selector: 'vertical-tab',
  templateUrl: './vertical-tab.component.html',
  styleUrls: ['./vertical-tab.component.scss']
})
export class VerticalTabComponent implements OnInit {
  @Input()
  public id: string;

  public environmentId: string;
  public context: string;
  public formData: string;
  public saveData: string;
  public userIdentityToken: string;
  public userIdentityTokenDecoded: string;
  public modalResponse: string;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    console.log('In ngOnInit');

    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.environmentId = args.envId;
      this.context = JSON.stringify(args.context, undefined, 2);

      console.log('Here! ', this.context, this.id);

      args.ready({
        showUI: true,
        title: `My Add-in ${this.id}`
      });
    });

    this.addinClientService.updateContext
      .subscribe((newContext: any) => {
        console.log(`update context for My Tab ${this.id}: `, newContext);
        this.context = JSON.stringify(newContext, undefined, 2);
      });

      this.addinClientService.addEventHandler('form-data-update')
        .addinEvent.subscribe((addinEvent: AddinEvent) => {
          console.log('client received form-data-update event: ', addinEvent.context);
          this.formData = JSON.stringify(addinEvent.context, undefined, 2);
        });
  }

  public getAuthToken() {
    this.userIdentityToken = undefined;

     this.addinClientService.getUserIdentityToken().subscribe(token => {
       this.userIdentityToken = token;
       this.userIdentityTokenDecoded = JSON.stringify(jwtDecode(token), undefined, 2);
     });
  }

  public invokeNavigation() {
    this.addinClientService.navigate({
      url: 'https://www.blackbaud.com'
    });
  }

  public openHelp() {
    this.addinClientService.openHelp({
      helpKey: 'applications.html'
    });
  }

  public showSimpleModal() {
    // define context for the modal
    let context = {
      someValue: 'this value was passed to the modal'
    };

    this.showModal('https://blackbaudaddinhelloworld.azurewebsites.net/helloworldmodal.html', context);
  }

  public showSkyUxModal() {
    // define context for the modal
    let context = {
      firstName: 'John',
      lastName: 'Doe'
    };

    this.showModal('https://host.nxt.blackbaud.com/addin-modal-demo/add-customer', context);
  }

  private showModal(url: string, context: any) {
    this.modalResponse = undefined;

    this.addinClientService.showModal({
      url: url,
      context: context
    }).subscribe(modalResponse => {
      this.modalResponse = JSON.stringify(modalResponse, undefined, 2);
    });
  }
}
