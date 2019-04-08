import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import App from '../components/App';
import Maxes from '../components/Maxes/Maxes';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Strength from '../components/Strength/Strength';
import Bodybuilding from '../components/Bodybuilding/Bodybuilding';
import StartingStrength from '../components/Strength/StrengthPrograms/StartingStrength/StartingStrength';
import TexasMethod from '../components/Strength/StrengthPrograms/TexasMethod/TexasMethod';
import Wendlers from '../components/Strength/StrengthPrograms/Wendlers/Wendlers';
import NoviceRoutine from '../components/Bodybuilding/BodybuildingPrograms/NoviceRoutine';
import Phul from '../components/Bodybuilding/BodybuildingPrograms/Phul';
import Phat from '../components/Bodybuilding/BodybuildingPrograms/Phat';

class Router extends React.Component {
	render() {

		const PrivateSignin = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.signIn.authenticated !== true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateRegister = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.signIn.authenticated !== true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateMaxes = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.goals === null
					?<Redirect to='/' />
					:<Component {...props} />
				)} />
			);

		const PrivateStrength = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateBodyBuilding = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateStartingStrength = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateTexasMethod = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateWendlers = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivateNoviceRoutine = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivatePhul = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		const PrivatePhat = ({ component: Component, ...rest}) => (
			<Route {...rest} render={(props) => (
				this.props.maxEntered === true
					?<Component {...props} />
					:<Redirect to='/' />
				)} />
			);

		return (
			<BrowserRouter>
				<div>
					<Route path='/' component={App} exact />
					<PrivateStrength path='/strength' component={Strength} exact />
					<PrivateBodyBuilding path='/bodybuilding' component={Bodybuilding} exact />
					<PrivateStartingStrength path='/startingstrength' component={StartingStrength} exact />
					<PrivateTexasMethod path='/texasmethod' component={TexasMethod} exact />
					<PrivateWendlers path='/wendlers' component={Wendlers} exact />
					<PrivateNoviceRoutine path='/noviceroutine' component={NoviceRoutine} exact />
					<PrivatePhul path='/phul' component={Phul} exact />
					<PrivatePhat path='/phat' component={Phat} exact />
					<PrivateRegister path='/register' component={Register} exact />
					<PrivateSignin path='/signin' component={Signin} exact />
					<PrivateMaxes path='/maxes' component={Maxes} exact />
				</div>
			</BrowserRouter>	
		)
	}
}

const mapStateToProps = (state) => {
	return {
		signIn: state.signIn,
		register: state.register,
		goals: state.goals.goal,
		maxEntered: state.maxes.maxEntered
	}
}

export default connect(mapStateToProps)(Router);