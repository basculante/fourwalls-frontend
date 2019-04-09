import React from 'react';
import { connect } from 'react-redux';
import { selectStrength, selectBodybuilding } from '../../actions/goal';
import { Grid, Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Homepage.css';

class Homepage extends React.Component {
	render(){
		return (
			<div className="homepage">
			<Navigation />
					<Grid columns={2} stackable className="goal_grid">
					<Grid.Row>
					<h1 className="vectro">
		        <span className="vectro-body">
		        FOUR WALLS OF IRON
		        </span>
		        <span className="vectro-red">I</span>
		        <span className="vectro-green">I</span>
		        <span className="vectro-blue">I</span>
        	</h1>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
							<Card centered raised fluid className="goal_card">
							<Link to="/maxes" onClick={this.props.selectStrength} className="goal_link">
									<Image src={require('../Strength/StrengthImages/Strength.jpg')} fluid />
									<Card.Header textAlign={'center'} className="goal_title">STRENGTH</Card.Header>
							</Link>
							</Card>
						</Grid.Column>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
							<Card centered raised fluid className="goal_card">
							<Link to="/maxes" onClick={this.props.selectBodybuilding} className="goal_link">
									<Image src={require('../Bodybuilding/BodybuildingImages/Bodybuilding.jpg')} fluid />
									<Card.Header textAlign={'center'} className="goal_title">BODYBUILDING</Card.Header>
							</Link>
							</Card>
						</Grid.Column>
					</Grid.Row>	
					</Grid>
			</div>
		)
	}
}

export default connect(null, { selectStrength, selectBodybuilding })(Homepage);