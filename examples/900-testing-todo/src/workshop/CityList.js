// Simple component, printing a list of cities. We can add cities to the list.
// The component uses all local state. This is NOT best practice, but sufficient for
// learning purposes.

// WORKSHOP - create a suite of tests for this component
import {useState} from "react";

const CityList = () => {
    // Local data
    const [cities, setCities] = useState([
        {id: 1, name: 'New York'},
        {id: 2, name: 'London'},
        {id: 3, name: 'Berlin'},
        {id: 4, name: 'Tokyo'},
    ]);
    const [newCityName, setNewCityName] = useState('');

    const addCity = name => {
        setCities(
            [...cities,
                {
                    id: cities.length + 1,
                    name: name
                }])
    }

    const deleteCity = id => {
        setCities(cities.filter(city => city.id !== id))
    }
    return (
        <div>
            <h2>A list of cities</h2>
            <ul className="list-group">
                {cities.map(city => (
                        <li key={city.id} className="list-group-item">
                            {city.id} - {city.name}
                            <button className="btn btn-info float-end"
                                onClick={()=>deleteCity(city.id)}>
                                Delete
                            </button>
                        </li>
                    )
                )}
            </ul>
            <input type="text"
                   className="form-control-lg"
                   placeholder="new City"
                   value={newCityName}
                   onChange={(e) => setNewCityName(e.target.value)}
            />
            <button className="btn btn-outline-dark btn-lg"
                    onClick={() => addCity(newCityName)}>Add City
            </button>
        </div>
    )
}
export default CityList
