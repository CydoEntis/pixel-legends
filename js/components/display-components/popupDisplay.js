import { BackDrop } from "../base-components/backdrop.js";
import { Popup } from "../base-components/popup.js";
import { Title } from "../base-components/title.js";

export class PopupDisplay {
	constructor(parent, title) {
		this.backdrop = new BackDrop(parent, "backdrop");
		this.popup = new Popup(this.backdrop.rootEl, "popup-container");
		this.title = new Title(this.popup.rootEl, title);
	}

	close() {
		this.popup.close();
		this.backdrop.close();
	}
}
