import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  @Input("productProxy") productItemProductAlertComponent;

  @Output("notifyProxy") notifyProductAlertComponent = new EventEmitter();
  //Property "priceModify" don't show on ProductListComponent. but Notify alert works.
  @Output() priceModify;

  ngOnInit() {
    //It dont work, I need to search the reason
    this.priceModify = this.productItemProductAlertComponent.price;
  }
}
