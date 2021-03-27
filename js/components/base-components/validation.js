import { Element } from "./element.js";
import { Txt } from "./txt.js";

export class Validation extends Element {
	constructor(parent, id, type, color) {
		super(parent, "div", id);
		this.text = new Txt(this.rootEl, "p", type, "sm", null, "");
		// this.setValidationBgColor(color);
		// this.setValidationTextColor(color);
		this.hideValidation();
	}

	setValidationBgColor(color) {
		if (color === "red") this.rootEl.classList.add("validation-error");
		else if (color === "green") this.rootEl.classList.add("validation-success");
		else if (color === "yellow") this.rootEl.classList.add("validation-warning");
	}

	setValidationTextColor(color) {
		if (color === "red") this.text.rootEl.classList.add("text-error");
		else if (color === "green") this.text.rootEl.classList.add("text-success");
		else if (color === "yellow") this.text.rootEl.classList.add("text-warning");
	}

	setValidationText(text) {
		this.text.rootEl.textContent = text;
	}

	updateValidation(text, bgColor, color) {
		this.setValidationText(text);
		this.setValidationBgColor(bgColor);
		this.setValidationTextColor(color);
		console.log(text);
	}

	hideValidation() {
		this.rootEl.hidden = true;
	}

	showValidation() {
		this.rootEl.hidden = false;
	}

	toggleValidation() {
		if (this.rootEl.hidden) this.rootEl.hidden = false;
		else this.rootEl.hidden = true;
	}

	validateInput(length, min, max) {
		if (length === 0) {
			this.showValidation();
			this.updateValidation("Please Enter A Username", "red", "red");
			return false;
		} else if (length <= min) {
			this.showValidation();
			this.updateValidation(`Username must be more than ${min} characters`, "red", "red");
			return false;
		} else if (length > max) {
			this.showValidation();
			this.updateValidation(`Username must be more than ${max} characters`, "red", "red");
			return false;
		} else {
			this.hideValidation();
			return true;
		}
	}
}
