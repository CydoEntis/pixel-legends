import { Element } from "./element.js";

export class Input extends Element {
	constructor(parent, id) {
		super(parent, "input", id);
		this.rootEl.classList.add("nes-input", "is-warning");
	}
	setPlaceholder(placeholder) {
		this.rootEl.placeholder = placeholder;
	}

	setMaxLength(max) {
		this.rootEl.maxLength = max;
	}

	getInput() {
		return this.rootEl.value.trim();
	}

	clearInput() {
		this.rootEl.value = "";
	}
}
