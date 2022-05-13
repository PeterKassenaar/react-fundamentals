import React, {Component} from 'react';

class About extends Component {
	// programmatically navigate to another route
    navigate() {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div>
                <h1>About Component</h1>
                <h2>About us</h2>
                <hr/>
                <div>Our Mission</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut beatae blanditiis commodi
                    consectetur delectus deleniti deserunt earum facilis harum in inventore, iure magni odit omnis
                    possimus quo repudiandae temporibus.
                </p>
                <button
                    className="btn btn-info"
                    onClick={() => this.navigate()}>
					Navigate to Contact, using JavaScript
                </button>
            </div>
        )
    }
}

export default About
