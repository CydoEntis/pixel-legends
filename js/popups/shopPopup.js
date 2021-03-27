import { PopupDisplay } from "../components/display-components/popupDisplay.js";
import { Button } from "../components/base-components/button.js";
import { ShopItemDisplay } from "../components/display-components/shopItemDisplay.js";
import { GenericPopup } from "./genericPopup.js";

export class ShopPopup extends PopupDisplay {
	constructor(parent, title, player, playerDisplay) {
		super(parent, title);
		this.player = player;
		this.playerDisplay = playerDisplay;
		this.shopItem = new ShopItemDisplay(
			this.popup.rootEl,
			"Potion",
			"../img/items/potions/red-potion.png",
			"A potion that heals health.",
			`${30} gold`
		);
		this.closeBtn = new Button(this.popup.rootEl, "close-btn", "red", "Close");
		this.onInitialize();
	}

	buyPotion() {
		if (this.player.potions !== 3 && this.player.gold >= 30) {
			this.player.potions++;
			this.player.gold -= 30;
			this.playerDisplay.updateGold(this.player.gold);

			const purhcasePopup = new GenericPopup(
				this.popup.rootEl,
				"Purchase Complete",
				"You successfully purchased a potion!"
			);
		} else if (this.player.potions === 3) {
			const maxPotionsPopup = new GenericPopup(
				this.popup.rootEl,
				"Max Potions",
				"You already have the maximum amount of potions"
			);
		} else {
			const insufficientFundsPopup = new GenericPopup(
				this.popup.rootEl,
				"Insufficient Funds",
				"Sorry. You don't have the required gold to purchase this item"
			);
		}
	}

	buyPotionBtn() {
		const buyBtn = document.querySelector("#purchase-btn");
		buyBtn.addEventListener("click", () => {
			this.buyPotion();
			console.log("Working");
		});
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
		this.buyPotionBtn();
		this.closePopupBtn();
	}
}
