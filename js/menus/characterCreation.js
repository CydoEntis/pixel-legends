import { Menu } from "../components/base-components/menu.js";
import { SelectorDisplay } from "../components/display-components/selectorDisplay.js";
import { SpriteDisplay } from "../components/display-components/spriteDisplay.js";
import { StatDisplay } from "../components/display-components/statDisplay.js";
import { InputDisplay } from "../components/display-components/inputDisplay.js";
import { Title } from "../components/base-components/title.js";
import { TwoButtonDisplay } from "../components/display-components/twoButtonDisplay.js";
import { loadResources, saveData } from "../util/util.js";
import { NPC } from "../entities/npc.js";
import { Player } from "../entities/player.js";
import { MainMenu } from "./mainMenu.js";

export class CharacterCreation {
	constructor(title, sprite, descr, damage, currHp, maxHp, energy, saveSlot) {
		this.rootEl = document.querySelector("#game-display");
		this.menu = new Menu(this.rootEl, "char-select");
		this.menuTitle = new Title(this.menu.rootEl, "Select A Class");
		this.inputDisplay = new InputDisplay(this.menu.rootEl);
		this.selectorDisplay = new SelectorDisplay(this.menu.rootEl, "sel-left-char", "sel-right-char");
		this.spriteDisplay = new SpriteDisplay(this.menu.rootEl, title, sprite, descr);
		this.statDisplay = new StatDisplay(this.menu.rootEl, damage, currHp, energy);
		this.charSelectBtns = new TwoButtonDisplay(
			this.menu.rootEl,
			"btns-display",
			"create-char-btn",
			"green",
			"Create",
			"reset-char-btn",
			"red",
			"Reset"
		);

		this.classIndex = 0;
		this.classData = [];
		this.saveSlot = saveSlot;

		this.defaultClass = new NPC(title, sprite, descr, damage, currHp, maxHp, energy);
		this.selectedClass = new NPC(title, sprite, descr, damage, currHp, maxHp, energy);

		this.onInitialize();
	}

	getUserInput() {
		return this.inputDisplay.input.getInput();
	}

	validateUserInput() {
		const length = this.getUserInput().length;
		return this.inputDisplay.validation.validateInput(length, 3, 10);
	}

	async loadClassData() {
		this.classData = await loadResources("/json/classes.json");
	}

	updateClass(title, sprite, descr, damage, currHp, energy) {
		this.spriteDisplay.updateSpriteDisplay(title, sprite, descr);
		this.statDisplay.updateStatDisplay(damage, currHp, energy);
	}

	prevClass() {
		const leftSel = document.querySelector("#sel-left-char");

		leftSel.addEventListener("click", () => {
			const classes = this.classData.classes;
			this.classIndex--;

			if (this.classIndex < 0) this.classIndex = classes.length - 1;

			let currClass = classes[this.classIndex];
			const { title, sprite, descr, damage, currHp, maxHp, energy } = currClass;
			this.updateClass(title, sprite, descr, damage, currHp, energy);
			this.selectedClass = new NPC(title, sprite, descr, damage, currHp, maxHp, energy);
		});
	}

	nextClass() {
		const rightSel = document.querySelector("#sel-right-char");

		rightSel.addEventListener("click", () => {
			const classes = this.classData.classes;
			this.classIndex++;

			if (this.classIndex >= classes.length) this.classIndex = 0;

			let currClass = classes[this.classIndex];
			const { title, sprite, descr, damage, currHp, maxHp, energy } = currClass;
			this.updateClass(title, sprite, descr, damage, currHp, energy);
			this.selectedClass = new NPC(title, sprite, descr, damage, currHp, maxHp, energy);
		});
	}

	createPlayer() {
		const username = this.getUserInput();
		const { title, sprite, descr, damage, currHp, maxHp, energy } = this.selectedClass;
		this.player = new Player(title, sprite, descr, damage, currHp, maxHp, energy, username);
		saveData(this.saveSlot, this.player);
	}

	createBtn() {
		const createBtn = document.querySelector("#create-char-btn");

		createBtn.addEventListener("click", () => {
			if (this.validateUserInput()) {
				this.createPlayer();
				const mainMenu = new MainMenu(this.player);
				this.hideMenu();
				// this.debug();
			} else {
				this.resetCharSel();
			}
		});
	}

	resetCharSel() {
		this.updateClass(
			this.defaultClass.title,
			this.defaultClass.sprite,
			this.defaultClass.descr,
			this.defaultClass.damage,
			this.defaultClass.currHp,
			this.defaultClass.energy
		);
		this.inputDisplay.input.clearInput();
	}

	resetBtn() {
		const resetBtn = document.querySelector("#reset-char-btn");
		resetBtn.addEventListener("click", () => {
			this.resetCharSel();
		});
	}

	onInitialize() {
		const selectorBtns = document.querySelector("#selectors-display");
		selectorBtns.hidden = false;
		this.loadClassData();
		this.prevClass();
		this.nextClass();
		this.createBtn();
		this.resetBtn();
	}

	hideMenu() {
		this.menu.rootEl.hidden = true;
	}

	debug() {
		this.rootEl.innerHTML = `
				<div class="container debug">
					<p class="test nes-text is-white">Class Created</p>
					<p class="test nes-text is-warning">Class Type: ${this.player.title}</p>
					</img class="sprite-med" src="${this.player.sprite}">
					<p class="test"><span class="nes-text is-error">Damage:	${this.player.damage}</span>  <span class="nes-text is-success">Health: ${this.player.currHp}</span> <span class="nes-text is-primary">Energy: ${this.player.energy}</span></p>
					<p class="test nes-text is-warning">Username: ${this.player.username}</p>
				</div>
			`;
	}
}
