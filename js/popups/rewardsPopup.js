import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Txt } from "../components/base-components/txt.js";
import { Button } from "../components/base-components/button.js";

export class RewardsPopup extends PopupDisplay {
	constructor(parent, title, text, combatMenu) {
		super(parent, title);
		this.combatMenu = combatMenu;
		this.txt = new Txt(this.popup.rootEl, "p", "message", "sm", "white", text);
		this.nextBtn = new Button(this.popup.rootEl, "next-btn", "yellow", "Next");
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

	spawnMonster() {
		this.nextBtn.rootEl.addEventListener("click", () => {
			this.combatMenu.generateRandomMonster();
			this.combatMenu.player.currHp = this.combatMenu.player.maxHp;
			this.combatMenu.battleDisplay.playerHealth.rootEl.value = this.combatMenu.player.currHp;
			this.closePopup();
		});
	}

	onInitialize() {
		this.spawnMonster();
		this.closePopupBtn();
	}
}
