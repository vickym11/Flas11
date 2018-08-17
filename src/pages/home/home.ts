import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {TipsPage} from '../tips/tips';
import {ProductosPage} from '../productos/productos';
import {PedidosPage} from '../pedidos/pedidos';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    irmenu() {
        this.navCtrl.push(MenuPage);
    }

    irtips() {
        this.navCtrl.push(TipsPage);
    }

    irproductos() {
        this.navCtrl.push(ProductosPage);
    }

    irpedidos() {
        this.navCtrl.push(PedidosPage);
    }
}


