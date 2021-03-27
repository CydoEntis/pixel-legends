import { Entity } from "./entity.js";

export class NPC extends Entity {
	constructor(title, sprite, descr, damage, currHp, maxHp, energy) {
		super(title, sprite, descr);
		this.damage = damage;
		this.currHp = currHp;
		this.maxHp = maxHp;
		this.energy = energy;
	}
}
