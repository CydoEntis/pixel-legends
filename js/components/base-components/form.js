import { Element } from "./element.js";

export class Form extends Element {
	constructor(parent, type, id) {
		super(parent, "form", id);
		this.rootEl.setAttribute("autocomplete", "off");
		this.preventReload();
	}

	preventReload() {
		this.rootEl.addEventListener(
			"submit",
			(e) => {
				e.preventDefault();
			},
			false
		);
	}
}
