/**
 * Creates the most basic element with an Id and appends it to the parent.
 * Creates and appends the element at initialization.
 */

export class Element {
	constructor(parent, rootEl, id) {
		this.rootEl = document.createElement(rootEl);
		this.setId(id);
		this.appendToParent(parent);
	}

	setId(id) {
		this.rootEl.setAttribute("id", id);
	}

	appendToParent(parent) {
		parent.appendChild(this.rootEl);
	}
}
