import { Component, OnInit } from '@angular/core';
import { AddinClientInitArgs, AddinClient, AddinButtonStyle } from '@blackbaud/sky-addin-client';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html'
})
export class MyButtonComponent implements OnInit {

  private addinClient: AddinClient;

  public ngOnInit() {

    this.addinClient = new AddinClient({
      callbacks: {
        init: (args: AddinClientInitArgs) => {
          args.ready({
            showUI: true,
            title: 'Add customer',
            buttonConfig: { style: AddinButtonStyle.Add }
          });
        },
        buttonClick: () => {
          this.showSkyUxModal();
        }
      }
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
    let response = this.addinClient.showModal({
      url: url,
      context: context
    });

    response.modalClosed.then((modalResponse) => {
      let res = JSON.stringify(modalResponse, undefined, 2);
      console.log(res);
    });
  }
}
