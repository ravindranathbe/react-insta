export function setInstaImages(name) {
	return {
		type: "GET_INSTA_IMAGES",
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(name);
			}, 3000);
		})
	};
}