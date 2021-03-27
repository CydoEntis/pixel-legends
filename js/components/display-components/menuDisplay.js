import { Container } from "../base-components/container.js";
import { MenuItem } from "../base-components/menuItem.js";

export class MenuDisplay {
	constructor(parent) {
		this.container = new Container(parent, "menu-display", "none");
		this.stats = new MenuItem(
			this.container.rootEl,
			"stats-container",
			"stats-/img",
			"../img/objects/stats.png",
			"stats",
			"Stats"
		);
		this.backpack = new MenuItem(
			this.container.rootEl,
			"backpack-container",
			"backpack-/img",
			"../img/objects/backpack.png",
			"backpack",
			"Backpack"
		);
		this.skills = new MenuItem(
			this.container.rootEl,
			"spells-container",
			"spells-/img",
			"../img/objects/spellbook.png",
			"spells",
			"Spells"
		);
		this.shop = new MenuItem(
			this.container.rootEl,
			"shop-container",
			"shop-/img",
			"../img/objects/shop.png",
			"shop",
			"Shop"
		);
		this.feats = new MenuItem(
			this.container.rootEl,
			"feats-container",
			"feats-/img",
			"../img/objects/feats.png",
			"feats",
			"Feats"
		);
		this.settings = new MenuItem(
			this.container.rootEl,
			"settings-container",
			"settings-/img",
			"../img/objects/settings.png",
			"settings",
			"Settings"
		);
	}
}
