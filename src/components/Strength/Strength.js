import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';
import './Strength.css';
import Navigation from '../Navigation/Navigation';

const Strength = () => {
	return (
		<div className="strength_page">
		<Navigation />
				<Grid stackable columns={3} className="strength_grid">
					<Grid.Row centered >
						<h1 className="program_title">SELECT A PROGRAM.</h1>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
						<Link to='/startingstrength'>
							<Card centered raised fluid className="strength_card">
								<Image src={require('./StrengthImages/startingstrength.jpg')} fluid/>
								<Card.Header textAlign={'center'}>
									<h1>NOVICE</h1>
								</Card.Header>
								<Card.Description textAlign={'center'}>
									<h2>STARTING STRENGTH</h2>
								</Card.Description>
							</Card>
						</Link>
						</Grid.Column>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
						<Link to='/texasmethod'>
							<Card centered raised fluid className="strength_card">
								<Image src={require('./StrengthImages/texasmethod.png')} fluid/>
								<Card.Header textAlign={'center'}>
									<h1>INTERMEDIATE</h1>
								</Card.Header>
								<Card.Description textAlign={'center'}>
									<h2>TEXAS METHOD</h2>
								</Card.Description>
							</Card>
						</Link>	
						</Grid.Column>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
						<Link to='/wendlers'>
							<Card centered raised fluid className="strength_card">
								<Image src={require('./StrengthImages/wendlers.jpg')} fluid/>
								<Card.Header textAlign={'center'}>
									<h1>ADVANCED</h1>
								</Card.Header>
								<Card.Description textAlign={'center'}>
									<h2>WENDLER'S 5/3/1</h2>
								</Card.Description>
							</Card>
						</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
		</div>
	)
}

export default Strength;