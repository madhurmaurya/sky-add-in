import {
  Component,
  OnInit
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddinClientInitArgs,
  AddinButtonStyle
} from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html'
})
export class MyButtonComponent implements OnInit {

  constructor(
    private addinClientService: AddinClientService
  ) {}

  public ngOnInit() {

    this.addinClientService.args.subscribe((args: AddinClientInitArgs) => {
      args.ready({
        showUI: true,
        title: 'Add customer',
        buttonConfig: { style: AddinButtonStyle.Add }
      });
    });

    this.addinClientService.buttonClick.subscribe(() => {
      this.showSkyUxModal();
    });
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

    this.addinClientService.showModal({
      url: url,
      context: context
    }).subscribe(modalResponse => {
      let res = JSON.stringify(modalResponse, undefined, 2);
      console.log(res);
    });
  }

}
