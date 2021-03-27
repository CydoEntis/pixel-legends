import { Menu } from "../components/base-components/menu.js";
import { PlayerDisplay } from "../components/display-components/playerDisplay.js";
import { SelectorDisplay } from "../components/display-components/selectorDisplay.js";
import { SpriteDisplay } from "../components/display-components/spriteDisplay.js";
import { MenuDisplay } from "../components/display-components/menuDisplay.js";
import { StatsPopup } from "../popups/statsPopup.js";
import { ShopPopup } from "../popups/shopPopup.js";
import { BackpackPopup } from "../popups/backpackPopup.js";
import { UnderDevelopmentPopup } from "../popups/underDevelopmentPopup.js";
import { SettingsPopup } from "../popups/settingsPopup.js";
import { AdventureMenu } from "./adventureMenu.js";
import { UpgradeMenu } from "./upgradeMenu.js";

export class MainMenu {
	constructor(player) {
		this.player = player;
		this.rootEl = document.querySelector("#game-display");
		this.menu = new Menu(this.rootEl, "main-menu");
		this.playerDisplay = new PlayerDisplay(
			this.menu.rootEl,
			this.player.username,
			this.player.level,
			this.player.gold,
			this.player.currExp,
			this.player.expToLvl
		);
		this.selectorDisplay = new SelectorDisplay(this.menu.rootEl, "main-sel-left", "main-sel-right");
		this.spriteDisplay = new SpriteDisplay(
			this.menu.rootEl,
			this.player.title,
			this.player.sprite,
			this.player.descr
		);
		this.menuDisplay = new MenuDisplay(this.menu.rootEl);

		this.onInitialize();
	}

	ventureMenu() {
		const rightSelector = document.querySelector("#main-sel-right");
		rightSelector.addEventListener("click", () => {
			const ventureMenu = new AdventureMenu(this.player);
			this.menu.remove();
		});
	}

	forgeMenu() {
		const leftSelector = document.querySelector("#main-sel-left");
		leftSelector.addEventListener("click", () => {
			const forgeMenu = new UpgradeMenu(this.player);
			this.menu.remove();
		});
	}

	showStatsMenu() {
		const statsContainer = document.querySelector("#stats-container");
		statsContainer.addEventListener("click", () => {
			const stats = new StatsPopup(this.menu.rootEl, "Stats", this.player);
		});
	}

	showBackpackMenu() {
		const backpackContainer = document.querySelector("#backpack-container");
		backpackContainer.addEventListener("click", () => {
			const backpack = new BackpackPopup(this.menu.rootEl, "Backpack", this.player);
		});
	}

	showSpellsMenu() {
		const spellsContainer = document.querySelector("#spells-container");
		spellsContainer.addEventListener("click", () => {
			const spells = new UnderDevelopmentPopup(this.menu.rootEl, "Spells");
		});
	}

	showShopMenu() {
		const shopContainer = document.querySelector("#shop-container");
		shopContainer.addEventListener("click", () => {
			const shop = new ShopPopup(this.menu.rootEl, "Shop", this.player, this.playerDisplay);
		});
	}

	showFeatsMenu() {
		const featsContainer = document.querySelector("#feats-container");
		featsContainer.addEventListener("click", () => {
			const feats = new UnderDevelopmentPopup(this.menu.rootEl, "Feats");
		});
	}

	showSettingsMenu() {
		const settingsContainer = document.querySelector("#settings-container");
		settingsContainer.addEventListener("click", () => {
			const settings = new SettingsPopup(this.menu.rootEl, "Settings");
		});
	}
	onInitialize() {
		this.forgeMenu();
		this.ventureMenu();
		this.showStatsMenu();
		this.showBackpackMenu();
		this.showSpellsMenu();
		this.showShopMenu();
		this.showFeatsMenu();
		this.showSettingsMenu();
	}
}
