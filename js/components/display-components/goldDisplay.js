// Displays the current gold value of the player next to a gold icon.

import { Container } from "../base-components/container.js";
import { Txt } from "../base-components/txt.js";
import { Sprite } from "../base-components/sprite.js";

export class GoldDisplay {
	constructor(parent, gold) {
		this.container = new Container(parent, "gold-display", "half");
		this.gold = new Txt(this.container.rootEl, "p", "gold", "sm", "yellow", gold);
		this.sprite = new Sprite(this.container.rootEl, "gold-icon", "../img/items/gold.png", "icon");
	}

	updateGoldDisplay(gold) {
		this.gold.setTxt(gold);
	}
}
