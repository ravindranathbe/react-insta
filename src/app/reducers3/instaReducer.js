const initialState = {
	result: []
};

const instaReducer = (state = initialState, action) => {
	switch(action.type) {
		case "GET_INSTA_IMAGES":
			state = {
				...state,
				result: [...state.result, action.payload]
			}
			break;
	}
	return state;
};

export default instaReducer;