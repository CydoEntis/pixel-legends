import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Txt } from "../components/base-components/txt.js";
import { Button } from "../components/base-components/button.js";

export class UnderDevelopmentPopup extends PopupDisplay {
	constructor(parent, title) {
		super(parent, title);
		this.txt = new Txt(
			this.popup.rootEl,
			"p",
			"credits",
			"sm",
			"white",
			"This section is still underdevelopment"
		);
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
