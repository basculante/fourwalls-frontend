import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signOut } from '../../actions/signin';
import { Button } from 'semantic-ui-react';
import './Navigation.css';

class Navigation extends React.Component {
	onSignOutClick = (formValues) => {
		this.props.signOut(this.props.history)
	}
	render() {
		if (this.props.authenticated === true){
			return (
				<div className="navigation">
					<Button onClick={ this.onSignOutClick } className="sign_out_button">Sign Out</Button>
				</div>
			);
		} else {
			return (
				<div className="navigation">
					<Link to='/'>
						<Button>Home</Button>
					</Link>
					<Link to='/register'>
						<Button className="login_button">Register</Button>
					</Link>
					<Link to='/signin'>
						<Button className="login_button">Sign In</Button>
					</Link>	
				</div>
			);
		}
	}
};

const mapStateToProps = (state) => {
	return{
		authenticated: state.signIn.authenticated
	}
}

export default withRouter(connect(mapStateToProps, { signOut })(Navigation));