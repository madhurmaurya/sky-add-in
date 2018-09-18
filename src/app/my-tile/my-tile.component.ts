import {
  Component,
  OnInit
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddinClientInitArgs
} from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-tile',
  templateUrl: './my-tile.component.html',
  styleUrls: ['./my-tile.component.scss']
})
export class MyTileComponent implements OnInit {
  public environmentId: string;
  public context: string;
  public userIdentityToken: string;
  public modalResponse: string;

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {
    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      this.environmentId = args.envId;
      this.context = JSON.stringify(args.context, undefined, 2);

      args.ready({
        showUI: true,
        title: 'My Custom Tile (SKY UX)'
      });
    });
  }

  public getAuthToken() {
    this.userIdentityToken = undefined;

     this.addinClientService.getAuthToken().subscribe(token => {
       this.userIdentityToken = token;
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
