import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signinReducer from './signinReducer';
import maxesReducer from './maxesReducer';
import goalsReducer from './goalsReducer';

export default combineReducers({
	form: formReducer,
	signIn: signinReducer,
	maxes: maxesReducer,
	goals: goalsReducer
})