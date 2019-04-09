import axios from 'axios';

export function signIn (signInEmail, signInPassword, history){
	return (dispatch) => {
			 axios({
				method: 'post',
				url: 'https://safe-atoll-21718.herokuapp.com/signin',
				data:{
					email: signInEmail,
					password: signInPassword
				}
			})
			.then(user => {
				if (user) {
					dispatch({type: 'AUTHENTICATED', payload: user.data});
					history.push('/');
				}
			})
			.catch(error => {
				dispatch({ type: 'AUTHENTICATION_ERROR', payload: 'Invalid email or password'})
			})
	} 
}

export function signOut(history){
	return (dispatch) => {
		dispatch({type: 'UNAUTHENTICATED'})
		history.push('/');
	};
};
