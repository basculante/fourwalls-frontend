const INITIAL_STATE = {
	authenticated: false
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'AUTHENTICATED':
			return {
				...state,
				authenticated: true,
				userId: action.payload.id,
				squat: action.payload.squat,
				bench: action.payload.bench,
				deadlift: action.payload.deadlift,
				ohp: action.payload.ohp,
				powerclean: action.payload.powerclean,
			};
		case 'UNAUTHENTICATED':
			return {
				authenticated: false,
			};
		case 'AUTHENTICATION_ERROR':
			return{
				...state,
				error: action.payload
			};
		case 'REGISTER_AUTHENTICATED':
			return {
				...state,
				authenticated: true,
				userId: action.payload.id,
				squat: action.payload.squat,
				bench: action.payload.bench,
				deadlift: action.payload.deadlift,
				ohp: action.payload.ohp,
				powerclean: action.payload.powerclean
			}
		case 'REGISTER_ERROR': 
			return {
				...state,
				registerError: action.payload
			}
		default: 
			return state;
	}
}