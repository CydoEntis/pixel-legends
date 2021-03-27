export const loadResources = async (filePath) => {
	try {
		const response = await fetch(filePath);
		const data = await response.json();
		return data;
	} catch (e) {
		console.log("Ooopsies there was an error, ", e);
	}
};

export function saveData(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function loadData(key) {
	const data = localStorage.getItem(key);
	return JSON.parse(data);
}

export function getData(key) {
	return localStorage.getItem(key);
}

export function deleteData(key) {
	localStorage.removeItem(key);
}
