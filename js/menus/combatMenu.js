import { Menu } from "../components/base-components/menu.js";
import { Title } from "../components/base-components/title.js";
import { BattleDisplay } from "../components/display-components/battleDisplay.js";
import { FourButtonDisplay } from "../components/display-components/fourButtonDisplay.js";
import { DeathPopup } from "../popups/deathPopup.js";
import { GenericPopup } from "../popups/genericPopup.js";
import { RewardsPopup } from "../popups/rewardsPopup.js";
import { UnderDevelopmentPopup } from "../popups/underDevelopmentPopup.js";
import { WarningPopup } from "../popups/warningPopup.js";

export class CombatMenu {
	constructor(title, monsterData, player, enemy) {
		this.monsterData = monsterData;
		this.player = player;
		this.enemy = enemy;
		this.rootEl = document.querySelector("#game-display");
		this.menu = new Menu(this.rootEl, "combat-menu");
		this.title = new Title(this.menu.rootEl, title);
		this.battleDisplay = new BattleDisplay(
			this.menu.rootEl,
			this.player.username,
			this.player.sprite,
			"",
			""
		);
		this.battleControls = new FourButtonDisplay(
			this.menu.rootEl,
			"cb-cntrls-container",
			"attack-btn",
			"red",
			"Attack",
			"spell-btn",
			"blue",
			"Magic",
			"heal-btn",
			"green",
			"Heal",
			"run-btn",
			"yellow",
			"Run"
		);

		this.monster;

		this.onInitialize();
	}

	getRandomMonsterIndex(max, min) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	updateMonsterUI(monster) {
		this.battleDisplay.updateEnemyUI(monster.name, monster.sprite, monster.currHp, monster.maxHp);
	}

	generateRandomMonster() {
		let randomIndex = this.getRandomMonsterIndex(this.monsterData.enemies.length, 0);
		this.monster = this.monsterData.enemies[randomIndex];
		this.updateMonsterUI(this.monster);

		this.monsterData.enemies.splice(randomIndex, 1);
		console.log(this.monsterData.enemies);
	}

	attackBtn() {
		const atkBtn = document.querySelector("#attack-btn");
		atkBtn.addEventListener("click", () => {
			this.battleControls.btn1.setButtonText("Attack");
			if (this.monster.currHp <= 0) {
				this.displayRewards();
				this.player.currExp += this.monster.exp;
				this.player.gold += this.monster.gold;
			} else if (this.player.currHp <= 0) {
				this.displayDeathPopup();
			} else if (this.player.currHp > 0 && !(this.monster.currHp < 0)) {
				this.monster.currHp -= this.player.damage;
				this.player.currHp -= this.monster.damage;
				this.battleDisplay.playerHealth.rootEl.value = this.player.currHp;
				this.battleDisplay.enemyHealth.rootEl.value = this.monster.currHp;

				if (this.player.currHp <= 0) {
					this.battleControls.btn1.setButtonText("Flee");
				} else if (this.monster.currHp <= 0) {
					this.battleControls.btn1.setButtonText("Loot");
				}
			}
		});
	}
	// TODO: Make a popup that shows how much exp and gold the player got from a monster
	displayDeathPopup() {
		const rewardsPopup = new DeathPopup(this.menu.rootEl, "R.I.P", `You have died`, this);
	}

	displayRewards() {
		const rewardsPopup = new RewardsPopup(
			this.menu.rootEl,
			"Rewards",
			`Gold received: ${this.monster.gold} \n\
			Exp received: ${this.monster.exp}`,
			this
		);
	}
	// TODO: Make a clickable button to spawn another monster.

	magicBtn() {
		const magicBtn = document.querySelector("#spell-btn");
		magicBtn.addEventListener("click", () => {
			const underDevelopment = new UnderDevelopmentPopup(this.menu.rootEl, "Magic");
		});
	}

	runBtn() {
		const runBtn = document.querySelector("#run-btn");
		runBtn.addEventListener("click", () => {
			const warningPopup = new WarningPopup(
				this.menu.rootEl,
				"Run Away",
				"Warning: You are about to run, if you choose to you will return to town!",
				this.menu,
				this.player
			);
		});
	}

	onInitialize() {
		this.generateRandomMonster();
		this.attackBtn();
		this.magicBtn();
		this.runBtn();
	}
}
