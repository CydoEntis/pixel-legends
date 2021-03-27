/**
 * Creates the sprite
 * Sets size, src and appends to parent at initialization.
 */

import { Element } from "./element.js";

export class Sprite extends Element {
	constructor(parent, id, sprite, size) {
		super(parent, "img", id);
		this.spriteSize(size);
		this.setSprite(sprite);

		// this.onInitialize();
	}

	spriteSize(size) {
		this.rootEl.classList.add("sprite");
		if (size === "sm") this.rootEl.classList.add("sprite-sm");
		else if (size === "med") this.rootEl.classList.add("sprite-med");
		else if (size === "lg") this.rootEl.classList.add("sprite-lg");
		else if (size === "icon") {
			this.rootEl.classList.add("icon");
			this.rootEl.classList.remove("sprite");
		} else if (size === "weapon") {
			this.rootEl.classList.add("weapon-spr");
			this.rootEl.classList.remove("sprite", "sprite-med", "sprite-sm", "sprite-lg");
		} else if (size === "stat-icon") this.rootEl.classList.add("stat-icon");
	}

	setSprite(sprite) {
		this.rootEl.src = sprite;
	}
}
