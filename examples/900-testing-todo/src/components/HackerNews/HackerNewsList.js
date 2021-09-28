import React from 'react';
import axios from 'axios';

// Hacker News API
const URL = 'http://hn.algolia.com/api/v1/search';

const HackerNewsList = () => {
    const [stories, setStories] = React.useState([]);
    const [error, setError] = React.useState(null);

    async function handleFetch(event) {
        let result;

        try {
            result = await axios.get(`${URL}?query=React`);

            setStories(result.data.hits);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div>
            <h2>Hacker News API (a bit old now) - List stories
                <button className="btn btn-outline-info" type="button" onClick={handleFetch}>
                    Fetch Stories
                </button>
            </h2>
            {error && <span>Something went wrong ...</span>}

            <ul className="list-group">
                {stories.map((story) => (
                    <li className="list-group-item" key={story.objectID}>
                        <a href={story.url}>{story.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HackerNewsList;
