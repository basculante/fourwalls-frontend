import axios from 'axios';

export function authenticatedSubmitMaxes(id, squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement, goal, history) {
	return (dispatch) => {
		axios({
			method: 'put',
			url: 'https://safe-atoll-21718.herokuapp.com/maxes',
			data: {
				id,
				squat,
				bench,
				deadlift,
				ohp,
				powerclean,
				squatIncrement,
				benchIncrement,
				deadliftIncrement,
				ohpIncrement,
				powercleanIncrement
			}
		})
			.then(maxes => {
				if (maxes && goal === 'strength') {
					dispatch ({type: 'UPDATED_MAXES_AUTHENTICATED', payload: maxes.data})
					history.push('/strength')
				} else if (maxes && goal === 'bodybuilding') {
					dispatch ({type: 'UPDATED_MAXES_AUTHENTICATED', payload: maxes.data})
					history.push('/bodybuilding')
				}
		});
	};
};

export function unauthenticatedSubmitMaxes(squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement, goal, history) {
		if (goal === "strength") {
		history.push('/strength')
	} else if (goal === 'bodybuilding') {
		history.push('/bodybuilding')
	}
	return (
		{
			type: 'UPDATED_MAXES_UNAUTHENTICATED',
			payload: {
				squat,
				bench,
				deadlift,
				ohp,
				powerclean,
				squatIncrement,
				benchIncrement,
				deadliftIncrement,
				ohpIncrement,
				powercleanIncrement
			}
		}
	)
}