import { Container } from "../base-components/container.js";
import { Button } from "../base-components/button.js";

export class TwoButtonDisplay {
	constructor(parent, containerId, btn1Id, btn1Color, btn1Text, btn2Id, btn2Color, btn2Text) {
		this.container = new Container(parent, containerId, "full");
		this.btn1 = new Button(this.container.rootEl, btn1Id, btn1Color, btn1Text);
		this.btn2 = new Button(this.container.rootEl, btn2Id, btn2Color, btn2Text);
	}
}
