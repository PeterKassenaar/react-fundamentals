import React, {Component} from 'react';

const headline = {
	textAlign: 'right',
	fontSize: '24px',
	borderRight: '4px solid grey',
	paddingRight: '10px',
	fontFamily: 'Arial, sans-serif',
	width: '280px',
	lineHeight: '150%'
};

class InlineStyles extends Component {
	render() {
		return (
			<>
				<p>2. Using inline styles:</p>
				<div style={headline}>
					<h2>Today's forecast:</h2>
					Expect <span style={{fontStyle: 'italic'}}>rainy weather</span> from Friday till Sunday afternoon
					{/*No style block in components. the code below is invalid*/}
					{/*<style>*/}
					{/*	.boldText{*/}
					{/*	font-variant: 'bold',*/}
					{/*	fontVariant: 'bold'*/}
					{/*}*/}
					{/*</style>*/}
				</div>
			</>
		);
	}
}

export default InlineStyles;
