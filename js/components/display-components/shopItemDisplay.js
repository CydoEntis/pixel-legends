import { Button } from "../base-components/button.js";
import { Container } from "../base-components/container.js";
import { Sprite } from "../base-components/sprite.js";
import { Txt } from "../base-components/txt.js";

export class ShopItemDisplay {
	constructor(parent, name, sprite, descr, price) {
		this.container = new Container(parent, "potion-container", "full");
		this.name = new Txt(this.container.rootEl, "h3", "potion", "sm", "yellow", name);
		this.sprite = new Sprite(this.container.rootEl, "potion-sprite", sprite, "sm");
		this.descr = new Txt(this.container.rootEl, "p", "potion-descr", "sm", "white", descr);
		this.price = new Txt(this.container.rootEl, "p", "price", "sm", "yellow", price);
		this.button = new Button(this.container.rootEl, "purchase-btn", "green", "Buy");

		this.container.rootEl.classList.add("shop-item");
	}
}
