import { Form } from "../base-components/form.js";
import { Input } from "../base-components/input.js";
import { Validation } from "../base-components/validation.js";

export class InputDisplay {
	constructor(parent) {
		this.form = new Form(parent, "full", "input-display");
		this.input = new Input(this.form.rootEl, "user-input");
		this.input.setPlaceholder("Enter A Username");
		this.input.setMaxLength(10);
		this.validation = new Validation(this.form.rootEl, "user-validation", "error", "red");
	}
}
