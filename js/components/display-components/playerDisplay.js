/**
 * Displays the current player information as follows.
 * Username, amount of gold, current level and an experience bar displaying the current exp total exp to level.
 */

import { Container } from "../base-components/container.js";
import { GoldDisplay } from "./goldDisplay.js";
import { ProgressDisplay } from "./progressDisplay.js";
import { UserDisplay } from "./userDisplay.js";

export class PlayerDisplay {
	constructor(parent, username, level, gold, currExp, expToLevel) {
		this.rootContainer = new Container(parent, "player-display", null);
		this.container = new Container(this.rootContainer.rootEl, "player-info", "full");
		this.user = new UserDisplay(this.container.rootEl, username);
		this.gold = new GoldDisplay(this.container.rootEl, gold);
		this.progress = new ProgressDisplay(this.rootContainer.rootEl, level, currExp, expToLevel);
	}

	updateUsername(username) {
		this.user.updateUsername(username);
	}

	updateGold(gold) {
		this.gold.updateGoldDisplay(gold);
	}

	updateUserProgress(level, currExp, expToLvl) {
		this.progress.updateProgressDisplay(level, currExp, expToLvl);
	}

	updatePlayerDisplay(username, gold, level, currExp, expToLvl) {
		this.updateUsername(username);
		this.updateGold(gold);
		this.updateUserProgress(level, currExp, expToLvl);
	}
}
