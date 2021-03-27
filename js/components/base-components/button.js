import { Element } from "./element.js";

export class Button extends Element {
	constructor(parent, id, color, text) {
		super(parent, "button", id);
		this.setButtonType(color);
		this.setButtonText(text);
	}

	setButtonType(color) {
		this.rootEl.classList.add("nes-btn");
		if (color === "green") this.rootEl.classList.add("is-success");
		else if (color === "red") this.rootEl.classList.add("is-error");
		else if (color === "yellow") this.rootEl.classList.add("is-warning");
		else if (color === "blue") this.rootEl.classList.add("is-primary");
	}

	setButtonText(text) {
		this.rootEl.textContent = text;
	}
}
