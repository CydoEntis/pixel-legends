import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Txt } from "../components/base-components/txt.js";
import { TwoButtonDisplay } from "../components/display-components/twoButtonDisplay.js";

export class SettingsPopup extends PopupDisplay {
	constructor(parent, title) {
		super(parent, title);

		this.txt = new Txt(
			this.popup.rootEl,
			"p",
			"credits",
			"sm",
			"white",
			"A Project By Cydo Entis - 2021"
		);
		this.buttons = new TwoButtonDisplay(
			this.popup.rootEl,
			"settings-container",
			"main-menu-btn",
			"yellow",
			"Menu",
			"close-btn",
			"red",
			"Close"
		);

		this.onInitialize();
	}

	closePopup() {
		this.close();
	}

	closePopupBtn() {
		this.buttons.btn2.rootEl.addEventListener("click", () => {
			this.closePopup();
		});
	}

	onInitialize() {
		this.closePopupBtn();
	}
}
