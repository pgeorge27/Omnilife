import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
	selectedItem: any;
	mensaje: any;
	activeMenu: string;
	menu: any;

	constructor(private nav: NavController, navParams: NavParams, menu: MenuController) {
		// If we navigated to this page, we will have an item available as a nav param
		this.selectedItem = navParams.get('item');
		this.mensaje = navParams.get('mensaje');
		this.menu = menu;
		this.activeMenu = navParams.get('menuActive');
	}

	openModal(){
        this.menu.open(this.activeMenu);
    }
}
