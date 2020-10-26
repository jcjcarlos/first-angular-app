import { Component } from "@angular/core";

import listProductsFromFile from "../exportedProducts";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  //All properties defined in this class are acessible in tamplates or in another Component. For Component than received the data, it used @Input Decorator,
  productListProductListComponent = listProductsFromFile;

  share() {
    window.alert("The product has been shared!");
  }

  shareProduct() {
    alert("You shared this product!");
  }

  onNotifyByProductAlert(){
    alert('You will be notified! We want you buy it!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
