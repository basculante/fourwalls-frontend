export default (state={}, action) => {
	switch(action.type) {
		case 'UPDATED_MAXES_AUTHENTICATED':
			return {
				...state,
				squat: action.payload.squat,
				bench: action.payload.bench,
				deadlift: action.payload.deadlift,
				ohp: action.payload.ohp,
				powerclean: action.payload.powerclean,
				squatIncrement: action.payload.squat_increment,
				benchIncrement: action.payload.bench_increment,
				deadliftIncrement: action.payload.deadlift_increment,
				ohpIncrement: action.payload.ohp_increment,
				powercleanIncrement: action.payload.powerclean_increment,
				maxEntered: true
		}
		case 'UPDATED_MAXES_UNAUTHENTICATED':
			return {
				squat: action.payload.squat,
				bench: action.payload.bench,
				deadlift: action.payload.deadlift,
				ohp: action.payload.ohp,
				powerclean: action.payload.powerclean,
				squatIncrement: action.payload.squatIncrement,
				benchIncrement: action.payload.benchIncrement,
				deadliftIncrement: action.payload.deadliftIncrement,
				ohpIncrement: action.payload.ohpIncrement,
				powercleanIncrement: action.payload.powercleanIncrement,
				maxEntered: true
			}
		default:
			return state;
	}
}