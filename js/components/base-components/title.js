import { Container } from "./container.js";
import { Txt } from "./txt.js";

export class Title {
	constructor(parent, text) {
		this.container = new Container(parent, "title-container", "full");
		this.title = new Txt(this.container.rootEl, "h1", "title", "med", "yellow", text);
	}
}
