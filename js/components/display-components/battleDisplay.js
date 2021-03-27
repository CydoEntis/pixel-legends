import { Container } from "../base-components/container.js";
import { HealthBar } from "../base-components/healthBar.js";
import { Sprite } from "../base-components/sprite.js";
import { Txt } from "../base-components/txt.js";

export class BattleDisplay {
	constructor(parent, playerName, playerSprite, enemyName, enemySprite) {
		this.battleContainer = new Container(parent, "battle-container", "battle");

		this.playerContainer = new Container(this.battleContainer.rootEl, "enemy-container", "half");
		this.playerName = new Txt(
			this.playerContainer.rootEl,
			"h3",
			"player-name",
			"sm",
			"white",
			playerName
		);
		this.playerSprite = new Sprite(
			this.playerContainer.rootEl,
			"player-sprite",
			playerSprite,
			"med"
		);
		this.playerHealth = new HealthBar(
			this.playerContainer.rootEl,
			"player-health",
			10,
			10,
			"green"
		);

		this.enemyContainer = new Container(this.battleContainer.rootEl, "enemy-container", "half");
		this.enemyName = new Txt(
			this.enemyContainer.rootEl,
			"h3",
			"enemy-name",
			"sm",
			"white",
			enemyName
		);
		this.enemySprite = new Sprite(this.enemyContainer.rootEl, "enemy-sprite", enemySprite, "med");
		this.enemyHealth = new HealthBar(this.enemyContainer.rootEl, "enemyr-health", 10, 10, "red");
	}

	updateEnemyUI(name, sprite, currHp, maxHp) {
		this.enemyName.setTxt(name);
		this.enemySprite.setSprite(sprite);
		this.enemyHealth.updateHealthValues(currHp, maxHp);
	}

	updatePlayerHealth(currHp) {
		this.playerHealth.updateCurrHealth(currHp);
	}

	updateMonsterHealth(currHp) {
		this.monsterHealth.updateCurrHealth(currHp);
	}
}
