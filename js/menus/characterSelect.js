import { Menu } from "../components/base-components/menu.js";
import { SelectorDisplay } from "../components/display-components/selectorDisplay.js";
import { PlayerDisplay } from "../components/display-components/playerDisplay.js";
import { SpriteDisplay } from "../components/display-components/spriteDisplay.js";
import { ThreeButtonDisplay } from "../components/display-components/threeButtonDisplay.js";
import { StatDisplay } from "../components/display-components/statDisplay.js";
import { loadData } from "../util/util.js";
import { Player } from "../entities/player.js";
import { getData } from "../util/util.js";
import { deleteData } from "../util/util.js";
import { CharacterCreation } from "./characterCreation.js";
import { DelCharPopup } from "../popups/delCharPopup.js";
import { MainMenu } from "./mainMenu.js";

export class CharacterSelect {
	constructor(title) {
		this.rootEl = document.querySelector("#game-display");
		this.menu = new Menu(this.rootEl, "load-menu");
		this.playerDisplay = new PlayerDisplay(this.menu.rootEl, "???", "?", "?", 0, 100);
		this.selectorDisplay = new SelectorDisplay(this.menu.rootEl, "sel-left-load", "sel-right-load");
		this.spriteDisplay = new SpriteDisplay(
			this.menu.rootEl,
			title,
			"../../../img/items/weaponsnew-char.png",
			""
		);
		this.statDisplay = new StatDisplay(this.menu.rootEl, "?", "?", "?");
		this.loadMenuBtns = new ThreeButtonDisplay(
			this.menu.rootEl,
			"btns-display",
			"play-btn",
			"yellow",
			"Play",
			"create-btn",
			"green",
			"Create",
			"del-btn",
			"red",
			"Delete"
		);

		this.playerData = [];
		this.saveSlot;
		this.index = 0;

		this.player;

		this.onInitialize();
	}

	updateUI(index) {
		if (index === -1) {
			this.playerDisplay.updatePlayerDisplay("???", "?", "?", 0, 100);
			this.spriteDisplay.updateSprite("../../../img/items/weaponsnew-char.png");
			this.statDisplay.updateStatDisplay("?", "?", "?");
		} else {
			this.playerDisplay.updatePlayerDisplay(
				this.playerData[index].username,
				this.playerData[index].gold,
				this.playerData[index].level,
				this.playerData[index].currExp,
				this.playerData[index].expToLvl
			);
			this.spriteDisplay.updateSprite(this.playerData[index].sprite);
			this.statDisplay.updateStatDisplay(
				this.playerData[index].damage,
				this.playerData[index].currHp,
				this.playerData[index].energy
			);
		}
	}

	toggleUIBtns(selectors, play, create, del) {
		const selectorBtns = document.querySelector("#selectors-display");
		const playBtn = document.querySelector("#play-btn");
		const createBtn = document.querySelector("#create-btn");
		const deleteBtn = document.querySelector("#del-btn");

		selectorBtns.hidden = selectors;
		playBtn.hidden = play;
		createBtn.hidden = create;
		deleteBtn.hidden = del;
	}

	loadSaveData() {
		if (getData("slot1") !== null && getData("slot2") === null) {
			this.saveSlot = "slot1";
			const slot1 = loadData(this.saveSlot);
			this.playerData.push(slot1);
			this.toggleUIBtns(true, false, false, false);
			this.updateUI(0);
		} else if (getData("slot1") !== null && getData("slot2") !== null) {
			this.saveSlot = "slot1";
			const slot1 = loadData(this.saveSlot);
			this.playerData.push(slot1);
			this.updateUI(0);
			const slot2 = loadData("slot2");
			this.playerData.push(slot2);

			this.toggleUIBtns(false, false, true, false);
		} else if (getData("slot1") === null && getData("slot2") !== null) {
			this.saveSlot = "slot2";
			const slot2 = loadData(this.saveSlot);
			this.playerData.push(slot2);
			this.toggleUIBtns(true, false, false, false);
			this.updateUI(0);
		} else {
			this.toggleUIBtns(true, true, false, true);
		}
	}

	setSaveSlot() {
		if (getData("slot1") === null) {
			this.saveSlot = "slot1";
		} else {
			this.saveSlot = "slot2";
		}
	}

	removeMenu() {
		const loadMenu = document.querySelector("#load-menu");
		loadMenu.remove();
	}

	prevSaveSlot() {
		const leftSel = document.querySelector("#sel-left-load");

		leftSel.addEventListener("click", () => {
			this.index--;

			if (this.index === 0 || this.index === 2) this.saveSlot = "slot1";
			else this.saveSlot = "slot2";

			if (this.index < 0) this.index = this.playerData.length - 1;

			this.updateUI(this.index);
		});
	}

	nextSaveSlot() {
		const rightSel = document.querySelector("#sel-right-load");

		rightSel.addEventListener("click", () => {
			this.index++;

			if (this.index === 0 || this.index === 2) this.saveSlot = "slot1";
			else this.saveSlot = "slot2";

			if (this.index >= this.playerData.length) this.index = 0;

			this.updateUI(this.index);
		});
	}

	goToMainMenu() {
		const playBtn = document.querySelector("#play-btn");
		playBtn.addEventListener("click", () => {
			let selectedPlayer = JSON.parse(getData(this.saveSlot));

			this.player = new Player(
				selectedPlayer.title,
				selectedPlayer.sprite,
				selectedPlayer.descr,
				selectedPlayer.damage,
				selectedPlayer.currHp,
				selectedPlayer.maxHp,
				selectedPlayer.energy,
				selectedPlayer.username
			);

			this.player.updatePlayerInfo(
				selectedPlayer.title,
				selectedPlayer.sprite,
				selectedPlayer.descr,
				selectedPlayer.damage,
				selectedPlayer.currHp,
				selectedPlayer.maxHp,
				selectedPlayer.energy,
				selectedPlayer.username,
				selectedPlayer.currExp,
				selectedPlayer.expToLvl,
				selectedPlayer.level,
				selectedPlayer.gold,
				selectedPlayer.potions
			);

			const mainMenu = new MainMenu(this.player);
			this.removeMenu();
		});
	}

	goToCharacterCreationBtn() {
		const playBtn = document.querySelector("#create-btn");
		playBtn.addEventListener("click", () => {
			this.setSaveSlot();
			const characterCreation = new CharacterCreation(
				"Paladin",
				"../../../img/items/weaponspaladin.png",
				"Protector of JUSTICEEE!!!",
				5,
				10,
				10,
				3,
				this.saveSlot
			);

			this.removeMenu();
		});
	}

	// Looks for a character with a matching username and deletes it from local storage.
	// Updates the UI to correspond to the data.
	deleteChar() {
		const delInput = document.querySelector("#del-char-input");

		let input = delInput.value;

		if (localStorage.getItem("slot1") !== null) {
			const slot1Data = JSON.parse(getData("slot1"));

			if (slot1Data.username === input) {
				deleteData("slot1");
				this.saveSlot = "slot2";
			} else console.log("Username doesn't exist");
		}

		if (localStorage.getItem("slot2") !== null) {
			const slot2Data = JSON.parse(getData("slot2"));

			if (slot2Data.username === input) {
				deleteData("slot2");
				this.saveSlot = "slot1";
			}
		}

		this.removePlayerData(input);

		if (this.playerData.length < 1) {
			this.updateUI(-1);
			this.toggleUIBtns(true, true, false, true);
		} else if (this.playerData.length > 1) {
			this.toggleUIBtns(false, false, true, false);
		} else {
			this.updateUI(0);
			this.toggleUIBtns(true, false, false, false);
		}
	}

	// Looks for the stored player data inside of this.playerData and removes it if the username is a match.
	removePlayerData(input) {
		if (this.playerData.length > 1) {
			if (this.playerData[0].username === input) {
				this.playerData.splice(0, 1);
			} else if (this.playerData[1].username === input) {
				this.playerData.splice(1);
			}
		} else {
			if (this.playerData[0].username === input) {
				this.playerData.splice(0, 1);
			}
		}
	}

	deleteCharBtn() {
		const deleteCharBtn = document.querySelector("#del-btn");
		deleteCharBtn.addEventListener("click", () => {
			const deleteCharPopup = new DelCharPopup(this.menu.rootEl, "Delete");

			const confirmDelBtn = document.querySelector("#confirm-del-btn");
			confirmDelBtn.addEventListener("click", () => {
				this.deleteChar();
				deleteCharPopup.close();
			});
		});
	}

	onInitialize() {
		this.loadSaveData();
		this.nextSaveSlot();
		this.prevSaveSlot();
		this.goToMainMenu();
		this.goToCharacterCreationBtn();
		this.deleteCharBtn();
	}
}
