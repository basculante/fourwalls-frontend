import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Card } from 'semantic-ui-react';
import './Bodybuilding.css';
import Navigation from '../Navigation/Navigation';

const Bodybuilding = () => {
	return (
		<div className="bodybuilding_page">
		<Navigation />
				<Grid stackable columns={3} className="bodybuilding_grid">
					<Grid.Row centered>
						<h1 className="program_title">SELECT A PROGRAM.</h1>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
							<Link to='/noviceroutine'>
								<Card centered raised fluid className="bodybuilding_card">
									<Image src={require('./BodybuildingImages/novice.jpg')} />
									<Card.Header textAlign={'center'}>
										<h1>NOVICE</h1>
									</Card.Header>
									<Card.Description textAlign={'center'}>
										<h2>NOVICE ROUTINE</h2>
									</Card.Description>
								</Card>
							</Link>
						</Grid.Column>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
							<Link to='/phul'>
								<Card centered raised fluid className="bodybuilding_card">
									<Image src={require('./BodybuildingImages/phul.png')} />
									<Card.Header textAlign={'center'}>
										<h1>INTERMEDIATE</h1>
									</Card.Header>
									<Card.Description textAlign={'center'}>
										<h2>PHUL</h2>
									</Card.Description>
								</Card>
							</Link>
						</Grid.Column>
						<Grid.Column style={{paddingRight:'50px', paddingLeft: '50px', paddingTop:'10px'}}>
							<Link to='/phat'>
								<Card centered raised fluid className="bodybuilding_card">
									<Image src={require('./BodybuildingImages/phat.png')} />
									<Card.Header textAlign={'center'}>
										<h1>ADVANCED</h1>
									</Card.Header>
									<Card.Description textAlign={'center'}>
										<h2>PHAT</h2>
									</Card.Description>
								</Card>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
		</div>
	)
}

export default Bodybuilding;