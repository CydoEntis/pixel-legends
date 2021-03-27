// Displays the current leven and progress of the player.

import { Container } from "../base-components/container.js";
import { ProgressBar } from "../base-components/progressBar.js";
import { Txt } from "../base-components/txt.js";

export class ProgressDisplay {
	constructor(parent, level, currExp, expToLvl) {
		this.container = new Container(parent, "exp-display", "full");
		this.level = new Txt(this.container.rootEl, "p", "curr-level", "sm", "white", `Lv. ${level}`);
		this.expBar = new ProgressBar(this.container.rootEl, currExp, expToLvl, "green");
	}

	updateProgressDisplay(level, currExp, expToLvl) {
		this.level.setTxt(`Lv. ${level}`);
		this.expBar.updateProgressValues(currExp, expToLvl);
	}
}
