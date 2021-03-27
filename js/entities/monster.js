import { NPC } from "./npc.js";

export class Monster extends NPC {
	constructor(name, image, descr, damage, health, energy, exp, loot, zone, isBoss) {
		super(name, image, descr, damage, health, energy);
		this._exp = exp;
		this._loot = loot;
		this._zone = zone;
		this._isBoss = isBoss;
	}
}
