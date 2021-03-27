import { Element } from "./element.js";

export class HealthBar extends Element {
	constructor(parent, id, currHp, maxHp, color) {
		super(parent, "progress", id);
		this.healthBarColor(color, currHp, maxHp);
	}

	updateHealthValues(currHp, maxHp) {
		this.rootEl.value = currHp;
		this.rootEl.max = maxHp;
	}

	updateCurrHealth(currHp) {
		this.rootEl.value = currHp;
	}

	healthBarColor(color, currHp, maxHp) {
		this.rootEl.classList.add("nes-progress");
		if (color === "green") this.rootEl.classList.add("is-success");
		else if (color === "red") this.rootEl.classList.add("is-error");
		else if (color === "yellow") this.rootEl.classList.add("is-warning");
		else if (color === "blue") this.rootEl.classList.add("is-primary");

		this.updateHealthValues(currHp, maxHp);
	}
}
