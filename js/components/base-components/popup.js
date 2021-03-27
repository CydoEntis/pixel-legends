import { BackDrop } from "./backdrop.js";
import { Element } from "./element.js";

export class Popup extends Element {
	constructor(parent, id) {
		super(parent, "div", id);
		this.rootEl.classList.add("popup");
	}

	close() {
		this.rootEl.remove();
	}
}
