import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Txt } from "../components/base-components/txt.js";
import { Button } from "../components/base-components/button.js";
import { MainMenu } from "../menus/mainMenu.js";

export class DeathPopup extends PopupDisplay {
	constructor(parent, title, text, combatMenu) {
		super(parent, title);
		this.combatMenu = combatMenu;
		this.txt = new Txt(this.popup.rootEl, "p", "message", "sm", "white", text);
		this.nextBtn = new Button(this.popup.rootEl, "next-btn", "yellow", "Town");
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

	returnHome() {
		this.nextBtn.rootEl.addEventListener("click", () => {
			this.combatMenu.menu.remove();
			this.combatMenu.player.currHp = this.combatMenu.player.maxHp;
			const mainMenu = new MainMenu(this.combatMenu.player);
			this.closePopup();
		});
	}

	onInitialize() {
		this.returnHome();
		this.closePopupBtn();
	}
}
