import axios from 'axios';

export function register (registerName, registerEmail, registerPassword, history){
	return (dispatch) => {
			 axios({
				method: 'post',
				url: 'http://localhost:3000/register',
				data:{
					name: registerName,
					email: registerEmail,
					password: registerPassword
				}
			})
			.then(user => {
				if (user) {
					dispatch({type: 'REGISTER_AUTHENTICATED', payload: user.data})
					history.push('/');
				}
			})
			.catch(error => {
				dispatch({type: 'REGISTER_ERROR', payload: 'Email is already registered.'})
			})
		} 
	}