const INITIAL_STATE = {
	goal: null
}

export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case 'SELECT_STRENGTH':
			return { goal: 'strength'}
		case 'SELECT_BODYBUILDING':
			return { goal: 'bodybuilding' }
		default:
			return state;
	};
};