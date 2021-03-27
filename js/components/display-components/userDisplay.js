// Displays the username of the player.

import { Container } from "../base-components/container.js";
import { Txt } from "../base-components/txt.js";

export class UserDisplay {
	constructor(parent, username) {
		this.container = new Container(parent, "user-display", "half");
		this.username = new Txt(this.container.rootEl, "h3", "username", "med", "white", username);
	}

	updateUsername(username) {
		this.username.setTxt(username);
	}
}
