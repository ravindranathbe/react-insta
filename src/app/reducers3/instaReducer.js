const initialState = {
	instaId: '',
	result: []
};

const instaReducer = (state = initialState, action) => {
	switch(action.type) {
		case "GET_INSTA_IMAGES_FULFILLED":
			state = {
				...state,
				result: [...state.result, action.payload]
			}
			break;
		case "HANDLE_INSTA_ID_FULFILLED":
			state = {
				...state,
				instaId: action.payload
			}
			break;
	}
	return state;
};

export default instaReducer;