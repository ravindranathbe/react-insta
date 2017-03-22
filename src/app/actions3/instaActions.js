import axios from 'axios';
import { INSTAGRAM_ACCESS_TOKEN } from '../app-config';

export function setInstaImages(txt) {
	return {
		type: "GET_INSTA_IMAGES",
		payload: new Promise((resolve, reject) => {
			axios.get(`http://www.reddit.com/r/${txt}.json`)
		      	.then(res => {
		      		const posts = res.data.data.children.map(obj => obj.data);
		      		resolve(posts[0].author);
		      	});
		})
	};
}

export function handleInstaId(txt) {
	return {
		type: "HANDLE_INSTA_ID",
		payload: new Promise((resolve, reject) => {
			resolve(txt);
		})
	};
}