import { NPC } from "./npc.js";

export class Player extends NPC {
	constructor(title, sprite, descr, damage, currHp, maxHp, energy, username) {
		super(title, sprite, descr, damage, currHp, maxHp, energy);
		this.username = username;
		this.currExp = 0;
		this.expToLvl = 100;
		this.level = 1;
		this.gold = 600;
		this.potions = 1;
		this.weapon = {
			type: "unarmed",
			name: "Bare Hands",
			sprite: "../../img/items/weapons/fist.png",
			damage: "2",
		};
	}

	updatePlayerInfo(
		title,
		sprite,
		descr,
		damage,
		currHp,
		maxHp,
		energy,
		username,
		currExp,
		expToLvl,
		level,
		gold,
		potions
	) {
		this.title = title;
		this.sprite = sprite;
		this.descr = descr;
		this.damage = damage;
		this.currHp = currHp;
		this.maxHp = maxHp;
		this.energy = energy;
		this.username = username;
		this.currExp = currExp;
		this.expToLvl = expToLvl;
		this.level = level;
		this.gold = gold;
		this.potions = potions;
	}
}
