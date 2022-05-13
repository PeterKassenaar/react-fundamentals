import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>About Component</h1>
            <h2>About us</h2>
            <hr/>
            <div>Our Mission</div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut beatae blanditiis commodi
                consectetur delectus deleniti deserunt earum facilis harum in inventore, iure magni odit omnis possimus
                quo repudiandae temporibus.
            </p>
            <h3>Navigating programatically</h3>
            <p>
                <button
                    className="btn btn-info"
                    onClick={() => navigate('/contact')}>
                    Click to Navigate, using JavaScript
                </button>
            </p>

        </div>
    )
}
export default About
