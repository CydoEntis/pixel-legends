import { Element } from "./element.js";

export class Menu extends Element {
	constructor(parent, id) {
		super(parent, "div", id);
		this.rootEl.classList.add("game-container");
	}

	remove() {
		this.rootEl.remove();
	}
}
