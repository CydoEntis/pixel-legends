import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Txt } from "../components/base-components/txt.js";
import { Button } from "../components/base-components/button.js";

export class GenericPopup extends PopupDisplay {
	constructor(parent, title, text) {
		super(parent, title);
		this.txt = new Txt(this.popup.rootEl, "p", "message", "sm", "white", text);
		this.closeBtn = new Button(this.popup.rootEl, "close-btn", "red", "Close");

		this.onInitialize();
	}

	closePopup() {
		this.close();
	}

	closePopupBtn() {
		this.closeBtn.rootEl.addEventListener("click", () => {
			this.closePopup();
		});
	}

	onInitialize() {
		this.closePopupBtn();
	}
}
