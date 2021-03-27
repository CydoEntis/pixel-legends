import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Input } from "../components/base-components/input.js";
import { Txt } from "../components/base-components/txt.js";
import { TwoButtonDisplay } from "../components/display-components/twoButtonDisplay.js";

export class DelCharPopup extends PopupDisplay {
	constructor(parent, title) {
		super(parent, title);
		this.warning = new Txt(
			this.popup.rootEl,
			"p",
			"popup-warning",
			"sm",
			"yellow",
			"Warning: You are about to delete your character!"
		);
		this.instructions = new Txt(
			this.popup.rootEl,
			"p",
			"popup-instructions",
			"sm",
			"white",
			"Enter the name of your character to delete."
		);
		this.delInput = new Input(this.popup.rootEl, "del-char-input");
		this.buttons = new TwoButtonDisplay(
			this.popup.rootEl,
			"del-btns-display",
			"confirm-del-btn",
			"green",
			"Confrim",
			"cancel-del-btn",
			"red",
			"Cancel"
		);

		this.onInitialize();
	}

	getInput() {
		this.delInput.getInput();
	}

	closePopup() {
		this.close();
	}

	closePopupBtn() {
		const cancelBtn = document.querySelector("#cancel-del-btn");
		cancelBtn.addEventListener("click", () => {
			this.closePopup();
		});
	}

	onInitialize() {
		this.closePopupBtn();
	}
}
