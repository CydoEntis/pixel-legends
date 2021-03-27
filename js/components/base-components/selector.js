import { Container } from "./container.js";
import { Element } from "./element.js";
import { Sprite } from "./sprite.js";

export class Selector extends Element {
	constructor(parent, id, flipped) {
		super(parent, "img", id);
		this.setSize();
		this.setSrc();
		this.flipSelDirection(flipped);
		this.rootEl.classList.add("nes-pointer");
	}

	setSize() {
		this.rootEl.classList.add("selector-img");
	}

	setSrc() {
		this.rootEl.src = "../../../img/objects/arrow.png";
	}

	flipSelDirection(flipped) {
		if (flipped) this.rootEl.classList.add("flipped");
	}
}
