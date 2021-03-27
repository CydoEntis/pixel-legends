/**
 * Creates a base progress bar
 * Accepts a color, base value and a max value
 * Style and appends  the progress bar at intialization.
 */

import { Element } from "./element.js";

export class ProgressBar extends Element {
	constructor(parent, currExp, expToLvl, color) {
		super(parent, "progress", "exp-bar");
		this.progressBarColor(color, currExp, expToLvl);
	}

	updateProgressValues(currExp, expToLvl) {
		this.rootEl.value = currExp;
		this.rootEl.max = expToLvl;
	}

	progressBarColor(color, currExp, expToLvl) {
		this.rootEl.classList.add("nes-progress");
		if (color === "green") this.rootEl.classList.add("is-success");
		else if (color === "red") this.rootEl.classList.add("is-error");
		else if (color === "yellow") this.rootEl.classList.add("is-warning");
		else if (color === "blue") this.rootEl.classList.add("is-primary");

		this.updateProgressValues(currExp, expToLvl);
	}
}
