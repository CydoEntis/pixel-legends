/**
 * Creates a container
 * Sets container size to either full or half width sizes.
 * Creates, styles and appends at initialization.
 */

import { Element } from "./element.js";

export class Container extends Element {
	constructor(parent, id, type) {
		super(parent, "div", id);
		this.setContainerType(type);
	}

	setContainerType(type) {
		if (type === "full") this.rootEl.classList.add("container");
		else if (type === "half") this.rootEl.classList.add("half-container");
		else if (type === "selector") this.rootEl.classList.add("selector");
		else if (type === "menu-item") this.rootEl.classList.add("menu-item");
		else if (type === "stat-container") this.rootEl.classList.add("stat-container");
		else if (type === "battle") this.rootEl.classList.add("battle-container");
	}
}
