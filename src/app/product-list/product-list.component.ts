import { Component } from '@angular/core';

import { objetos } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  objetos = objetos;

  share() {
    window.alert('The product has been shared!');
  }

  share2(arg :String){
    alert('Olha o Share! ' + arg);
  }

  onNotify(){
    alert('Você receberá notificação na venda do produto: ');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/