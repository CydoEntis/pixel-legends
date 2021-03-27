import { loadResources } from "../util/util.js";

export let classList = [];

export async function getClasses() {
	const filePath = "/json/classes.json";
	try {
		classList = await loadResources(filePath);
	} catch (e) {
		getClasses();
	}
}

getClasses();
