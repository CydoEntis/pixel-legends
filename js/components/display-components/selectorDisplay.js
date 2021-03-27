import { Container } from "../base-components/container.js";
import { Selector } from "../base-components/selector.js";

export class SelectorDisplay {
	constructor(parent, leftSelId, rightSelId) {
		this.rootContainer = new Container(parent, "selectors-display", "full");

		this.leftContainer = new Container(this.rootContainer.rootEl, "left-select", "selector");
		this.rightContainer = new Container(this.rootContainer.rootEl, "right-select", "selector");

		this.leftSelector = new Selector(this.leftContainer.rootEl, leftSelId, true);
		this.rightSelector = new Selector(this.rightContainer.rootEl, rightSelId, false);
	}
}
