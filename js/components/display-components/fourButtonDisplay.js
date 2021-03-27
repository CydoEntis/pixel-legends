import { Container } from "../base-components/container.js";
import { Button } from "../base-components/button.js";

export class FourButtonDisplay {
	constructor(
		parent,
		containersId,
		btn1Id,
		btn1Color,
		btn1Text,
		btn2Id,
		btn2Color,
		btn2Text,
		btn3Id,
		btn3Color,
		btn3Text,
		btn4Id,
		btn4Color,
		btn4Text
	) {
		this.container = new Container(parent, containersId, "full");
		this.btn1 = new Button(this.container.rootEl, btn1Id, btn1Color, btn1Text);
		this.btn2 = new Button(this.container.rootEl, btn2Id, btn2Color, btn2Text);
		this.btn3 = new Button(this.container.rootEl, btn3Id, btn3Color, btn3Text);
		this.btn4 = new Button(this.container.rootEl, btn4Id, btn4Color, btn4Text);
	}
}
