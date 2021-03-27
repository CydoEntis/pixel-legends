import { Menu } from "../components/base-components/menu.js";
import { PlayerDisplay } from "../components/display-components/playerDisplay.js";
import { SelectorDisplay } from "../components/display-components/selectorDisplay.js";
import { SpriteDisplay } from "../components/display-components/spriteDisplay.js";
import { Button } from "../components/base-components/button.js";
import { MainMenu } from "./mainMenu.js";
import { UpgradeMenu } from "./upgradeMenu.js";
import { loadResources } from "../util/util.js";
import { CombatMenu } from "./combatMenu.js";

export class AdventureMenu {
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
		this.selectorDisplay = new SelectorDisplay(this.menu.rootEl, "adv-sel-left", "adv-sel-right");
		this.spriteDisplay = new SpriteDisplay(
			this.menu.rootEl,
			"Adventure",
			"../../img/objects/venture-board.png",
			"Prepare yourself for a dangerous journey"
		);
		this.ventureBtn = new Button(this.menu.rootEl, "venture-btn", "green", "Venture");
		this.monsterData = [];
		this.onInitialize();
	}

	async loadMonsters() {
		this.monsterData = await loadResources("/json/forest.json");
	}

	goToForgeMenu() {
		const rightSelector = document.querySelector("#adv-sel-right");
		rightSelector.addEventListener("click", () => {
			const forgeMenu = new UpgradeMenu(this.player);
			this.menu.remove();
		});
	}

	goToMainMenu() {
		const leftSelector = document.querySelector("#adv-sel-left");
		leftSelector.addEventListener("click", () => {
			const mainMenu = new MainMenu(this.player);
			this.menu.remove();
		});
	}

	goAdventure() {
		const ventureBtn = document.querySelector("#venture-btn");
		ventureBtn.addEventListener("click", () => {
			const combatMenu = new CombatMenu("The Forest", this.monsterData, this.player, null);
			this.menu.remove();
		});
	}

	onInitialize() {
		this.loadMonsters();
		this.goToMainMenu();
		this.goToForgeMenu();
		this.goAdventure();
	}
}
