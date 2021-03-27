import { Button } from "../components/base-components/button.js";
import { InventoryItem } from "../components/base-components/inventoryItem.js";
import { Menu } from "../components/base-components/menu.js";
import { PlayerDisplay } from "../components/display-components/playerDisplay.js";
import { SelectorDisplay } from "../components/display-components/selectorDisplay.js";
import { SpriteDisplay } from "../components/display-components/spriteDisplay.js";
import { MainMenu } from "./mainMenu.js";
import { AdventureMenu } from "./adventureMenu.js";
import { loadResources } from "../util/util.js";
import { GenericPopup } from "../popups/genericPopup.js";
import { Txt } from "../components/base-components/txt.js";

export class UpgradeMenu {
	constructor(player) {
		this.player = player;
		this.rootEl = document.querySelector("#game-display");
		this.menu = new Menu(this.rootEl, "upgrade-menu");
		this.playerDisplay = new PlayerDisplay(
			this.menu.rootEl,
			this.player.username,
			this.player.level,
			this.player.gold,
			this.player.currExp,
			this.player.expToLvl
		);
		this.selectorDisplay = new SelectorDisplay(
			this.menu.rootEl,
			"forge-sel-left",
			"forge-sel-right"
		);
		this.spriteDisplay = new SpriteDisplay(
			this.menu.rootEl,
			"The Forge",
			"../../img/objects/forge.png",
			"Upgrading weapons is what I do."
		);

		this.inventoryItem = new InventoryItem(
			this.menu.rootEl,
			"upgrade-item",
			"upgradable-weapon",
			this.player.weapon.sprite,
			"weapon",
			this.player.weapon.name
		);
		this.inventoryItem.sprite.spriteSize("weapon");
		this.upgradeBtn = new Button(this.menu.rootEl, "upgrade-btn", "green", "Upgrade - 200g");

		this.classDat = [];
		this.currClassWeapons = [];

		this.onInitialize();
	}

	async loadClassData() {
		this.classData = await loadResources("/json/classes.json");
	}

	goToMainMenu() {
		const rightSelector = document.querySelector("#forge-sel-right");
		rightSelector.addEventListener("click", () => {
			const goToMainMenu = new MainMenu(this.player);
			this.menu.remove();
		});
	}

	goToAdventureMenu() {
		const leftSelector = document.querySelector("#forge-sel-left");
		leftSelector.addEventListener("click", () => {
			const goToAdventureMenu = new AdventureMenu(this.player);
			this.menu.remove();
		});
	}

	getClassWeaponList() {
		if (this.player.title === "Paladin") this.currClassWeapons = this.classData.classes[0].weapons;
		else if (this.player.title === "Archer")
			this.currClassWeapons = this.classData.classes[1].weapons;
		else if (this.player.title === "Wizard")
			this.currClassWeapons = this.classData.classes[2].weapons;
		else if (this.player.title === "Rogue")
			this.currClassWeapons = this.classData.classes[3].weapons;
		else if (this.player.title === "Priest")
			this.currClassWeapons = this.classData.classes[4].weapons;
	}

	updateWeaponUI() {
		this.inventoryItem.itemName.setTxt(this.player.weapon.name);
		this.inventoryItem.sprite.setSprite(this.player.weapon.sprite);
	}

	updateGoldUI() {
		this.playerDisplay.updateGold(this.player.gold);
	}

	upgradeToNextWeapon() {
		this.getClassWeaponList();
		if (this.player.weapon.type === "unarmed" && this.player.gold >= 200) {
			const { type, name, sprite, damage } = this.currClassWeapons[0];
			this.player.weapon.type = type;
			this.player.weapon.name = name;
			this.player.weapon.sprite = sprite;
			this.player.weapon.damage = damage;

			this.player.gold -= 200;
			this.updateGoldUI();

			this.upgradeBtn.setButtonText("Upgrade - 500g");

			const confirmationPopup = new GenericPopup(
				this.menu.rootEl,
				"Upgrade",
				`You upgraded to a ${this.player.weapon.name}!!`
			);
		} else if (this.player.weapon.type === "wood" && this.player.gold >= 500) {
			const { type, name, sprite, damage } = this.currClassWeapons[1];
			this.player.weapon.type = type;
			this.player.weapon.name = name;
			this.player.weapon.sprite = sprite;
			this.player.weapon.damage = damage;

			this.player.gold -= 500;
			this.updateGoldUI();

			this.upgradeBtn.setButtonText("Upgrade - 1000g");

			const confirmationPopup = new GenericPopup(
				this.menu.rootEl,
				"Upgrade",
				`You upgraded to a ${this.player.weapon.name}!!`
			);
		} else if (this.player.weapon.type === "iron" && this.player.gold >= 1000) {
			const { type, name, sprite, damage } = this.currClassWeapons[2];
			this.player.weapon.type = type;
			this.player.weapon.name = name;
			this.player.weapon.sprite = sprite;
			this.player.weapon.damage = damage;

			this.player.gold -= 1000;
			this.updateGoldUI();

			this.upgradeBtn.setButtonText("No Upgrades");
			this.upgradeBtn.rootEl.classList.remove("is-success");
			this.upgradeBtn.rootEl.classList.add("is-disabled");
			this.upgradeBtn.rootEl.disabled = true;

			const confirmationPopup = new GenericPopup(
				this.menu.rootEl,
				"Upgrade",
				`You upgraded to a ${this.player.weapon.name}!!`
			);
		} else {
			const unableToPurchase = new GenericPopup(
				this.menu.rootEl,
				"Insufficient Funds",
				"Sorry. You don't have the required gold to purchase this item"
			);
		}
	}

	upgradeWeapon() {
		const upgradeBtn = document.querySelector("#upgrade-btn");
		upgradeBtn.addEventListener("click", () => {
			this.upgradeToNextWeapon();
			this.updateWeaponUI();
		});
	}

	onInitialize() {
		this.loadClassData();
		this.goToMainMenu();
		this.goToAdventureMenu();
		this.upgradeWeapon();
	}
}
