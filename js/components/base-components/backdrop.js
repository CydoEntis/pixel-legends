import { Element } from "./element.js";

export class BackDrop extends Element {
	constructor(parent, id) {
		super(parent, "div", id);
	}

	close() {
		this.rootEl.remove();
	}
}
