import { Container } from "../base-components/container.js";
import { Stat } from "../base-components/stat.js";

export class StatDisplay {
	constructor(parent, damage, health, energy) {
		this.container = new Container(parent, "stat-display", "none");
		this.damage = new Stat(
			this.container.rootEl,
			"damage-container",
			"damage-/img",
			"../img/objects/damage3.png",
			"stats",
			"green",
			damage
		);
		this.health = new Stat(
			this.container.rootEl,
			"health-container",
			"health-/img",
			"../img/objects/health.png",
			"health",
			"red",
			health
		);
		this.energy = new Stat(
			this.container.rootEl,
			"energy-container",
			"energy-/img",
			"../img/objects/energy3.png",
			"spells",
			"blue",
			energy
		);
	}

	updateStatDisplay(damage, health, energy) {
		this.damage.updateStatVal(damage);
		this.health.updateStatVal(health);
		this.energy.updateStatVal(energy);
	}
}
