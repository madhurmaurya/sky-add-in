import { Component, OnInit } from "@angular/core";
import { AddinClientService } from "@blackbaud/skyux-lib-addin-client";
import { forkJoin } from "rxjs";
import { LocalStorageConfigService } from "../local-storage-config.service";
import { LineItem } from "./line-item";

@Component({
  selector: "my-tile",
  templateUrl: "./my-tile.component.html",
  styleUrls: ["./my-tile.component.scss"],
})
export class MyTileComponent implements OnInit {
  public environmentId: string;
  public context: any;
  public userIdentityToken: string;
  public modalResponse: string;
  public message: string;
  public id: number;
  public masterList: LineItem[] = [];
  public items: LineItem[] = [];

  constructor(
    private addinClientService: AddinClientService,
    private localStorageService: LocalStorageConfigService
  ) {}

  public ngOnInit() {
    forkJoin([
      this.localStorageService.getConfig("comments"),
      this.addinClientService.args,
    ]).subscribe(([items, args]) => {
      if (items && items.length) {
        this.masterList = items;
      }
      this.environmentId = args.envId;
      this.context = args.context.config;
      this.id = args.context.id;

      this.items = this.masterList.filter((x) => x.id === this.id);
      args.ready({
        showUI: true,
        title: "COLLABORATE",
      });
    });
  }

  public add() {
    if (this.message) {
      let item: LineItem = {
        createdBy: `${this.context.givenName} ${this.context.surname}`,
        createdByEmail: this.context.userName,
        createdDate: new Date().toISOString().slice(0, 10),
        message: this.message,
        id: this.id,
        important: false,
      };
      this.masterList.push(item);
      this.items.push(item);
      this.localStorageService.setConfig("comments", this.masterList);
      this.message = "";
    }
  }
}
