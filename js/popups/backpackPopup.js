import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Button } from "../components/base-components/button.js";
import { InventoryItem } from "../components/base-components/inventoryItem.js";

export class BackpackPopup extends PopupDisplay {
	constructor(parent, title, player) {
		super(parent, title);
		this.player = player;
		this.weapon = new InventoryItem(
			this.popup.rootEl,
			"weapon-container",
			"weapon-sprite",
			this.player.weapon.sprite,
			"weapon-tag",
			this.player.weapon.name
		);

		this.weapon.sprite.spriteSize("weapon");

		this.potions = new InventoryItem(
			this.popup.rootEl,
			"potion-container",
			"potion-sprite",
			"../img/items/potions/red-potion.png",
			"potions",
			`Health potions x${player.potions}`
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
