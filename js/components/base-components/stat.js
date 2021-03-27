import { Container } from "./container.js";
import { Sprite } from "./sprite.js";
import { Txt } from "./txt.js";

export class Stat {
	constructor(parent, containerId, statId, sprite, nameId, color, value) {
		this.container = new Container(parent, containerId, "stat-container");
		this.sprite = new Sprite(this.container.rootEl, statId, sprite, "stat-icon");
		this.value = new Txt(this.container.rootEl, "p", nameId, "stat-txt", color, value);
	}

	updateStatVal(value) {
		this.value.setTxt(value);
	}
}
