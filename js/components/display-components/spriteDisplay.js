import { Container } from "../base-components/container.js";
import { Sprite } from "../base-components/sprite.js";
import { Txt } from "../base-components/txt.js";

export class SpriteDisplay {
	constructor(parent, title, sprite, descr) {
		this.container = new Container(parent, "sprite-display", null);
		this.title = new Txt(this.container.rootEl, "h3", "archetype", "med", "yellow", title);
		this.sprite = new Sprite(this.container.rootEl, null, sprite, "med");
		this.descr = new Txt(this.container.rootEl, "p", "description", "sm", "default", descr);
	}

	updateTitle(title) {
		this.title.setTxt(title);
	}

	updateSprite(sprite) {
		this.sprite.setSprite(sprite);
	}

	updateDescr(descr) {
		this.descr.setTxt(descr);
	}

	updateSpriteDisplay(title, sprite, descr) {
		this.updateTitle(title);
		this.updateSprite(sprite);
		this.updateDescr(descr);
	}
}
