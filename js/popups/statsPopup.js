import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Button } from "../components/base-components/button.js";
import { StatDisplay } from "../components/display-components/statDisplay.js";

export class StatsPopup extends PopupDisplay {
	constructor(parent, title, player) {
		super(parent, title);
		this.stats = new StatDisplay(this.popup.rootEl, player.damage, player.currHp, player.energy);
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
