import { Container } from "./container.js";
import { Sprite } from "./sprite.js";
import { Txt } from "./txt.js";

export class MenuItem {
	constructor(parent, containerId, statId, sprite, nameId, name) {
		this.container = new Container(parent, containerId, "menu-item");
		this.sprite = new Sprite(this.container.rootEl, statId, sprite, "sm");
		this.name = new Txt(this.container.rootEl, "p", nameId, "sm", "yellow", name);

		this.container.rootEl.classList.add("nes-pointer");
	}
}
