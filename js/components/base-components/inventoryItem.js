import { Container } from "./container.js";
import { Sprite } from "./sprite.js";
import { Txt } from "./txt.js";

export class InventoryItem {
	constructor(parent, containerId, spriteId, sprite, itemId, itemName) {
		this.container = new Container(parent, containerId, "full");
		this.sprite = new Sprite(this.container.rootEl, spriteId, sprite, "sm");
		this.itemName = new Txt(this.container.rootEl, "p", itemId, "sm", "white", itemName);
		this.container.rootEl.classList.add("inventory-items");
		this.sprite.rootEl.classList.remove("sprite");
	}
}
