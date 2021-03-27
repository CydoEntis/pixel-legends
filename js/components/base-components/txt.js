/**
 * Creates various txt elements.
 * Sets size, text content, color  and appends to parent at initialization.
 */

import { Element } from "./element.js";

export class Txt extends Element {
	constructor(parent, rootEl, id, size, color, txt) {
		super(parent, rootEl, id);
		this.txtColor(color);
		this.txtSize(size);
		this.setTxt(txt);

		// this.onInitialize();
	}

	txtColor(color) {
		if (color === "red") this.rootEl.classList.add("nes-text", "is-error");
		else if (color === "green") this.rootEl.classList.add("nes-text", "is-success");
		else if (color === "blue") this.rootEl.classList.add("nes-text", "is-primary");
		else if (color === "yellow") this.rootEl.classList.add("nes-text", "is-warning");
		else this.rootEl.classList.add("is-white");
	}

	txtSize(size) {
		if (size === "sm") this.rootEl.classList.add("txt-sm");
		else if (size === "med") this.rootEl.classList.add("txt-med");
		else if (size === "lg") this.rootEl.classList.add("txt-lg");
		else this.rootEl.classList.add("txt-default");
	}

	setTxt(txt) {
		this.rootEl.textContent = txt;
	}
}
