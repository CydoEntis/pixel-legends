import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Txt } from "../components/base-components/txt.js";
import { Button } from "../components/base-components/button.js";
import { MainMenu } from "../menus/mainMenu.js";

export class WarningPopup extends PopupDisplay {
	constructor(parent, title, text, combatMenu, player) {
		super(parent, title);
		this.txt = new Txt(this.popup.rootEl, "p", "message", "sm", "white", text);

		this.confirmBtn = new Button(this.popup.rootEl, "confirm-btn", "green", "Confirm");
		this.closeBtn = new Button(this.popup.rootEl, "close-btn", "red", "Close");

		this.combatMenu = combatMenu;
		this.player = player;
		this.onInitialize();
	}

	closePopup() {
		this.close();
	}

	confirmPopupBtn() {
		this.confirmBtn.rootEl.addEventListener("click", () => {
			console.log("clicked");
			this.combatMenu.remove();
			const mainMenu = new MainMenu(this.player);
			this.closePopup();
		});
	}
	closePopupBtn() {
		this.closeBtn.rootEl.addEventListener("click", () => {
			this.closePopup();
		});
	}

	onInitialize() {
		this.confirmPopupBtn();
		this.closePopupBtn();
	}
}
