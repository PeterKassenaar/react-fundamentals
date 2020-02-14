// CountryDetail.js - show details of a specific country
import React, {useState, useEffect} from 'react'

// A pure presentational component - now as a function based component
function CountryDetail (props) {
    // introducing some local state, to keep track how often this component
    // has updated
    const [count, setCount] = useState(0);

    // updating the state in an effect hook
    useEffect(()=>{
        // 1. Elke keer als een re-render plaatsvind
        setCount(count + 1);
        // 3. De returnfunctie wordt uitgevoerd als
        // 'componentDidUpdate en 'componentWillUnmount' wordt uitgevoerd
        return()=>{
            console.log('Component updated');
        }
    },[props.country]);  // 2. afhankelijkheden <== pass in props.country as the second parameter. Otherwise you've created an infinite loop!

        const country = props.country;
        return (
            <div>
                <h2>{country.name}</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        id: {country.id}
                    </li>
                    <li className="list-group-item">
                        name: {country.name}
                    </li>
                    <li className="list-group-item">
                        capital: {country.capital}
                    </li>
                    <li className="list-group-item">
                        details: {country.details}
                    </li>
                    {/*Some webpack magic below, to resolve the correct image*/}
                    <li className="list-group-item">
                        <img
                            className="img-fluid"
                            src={require(`../../img/countries/${country.img}` )} alt={country.name}/>
                    </li>
                </ul>
                (component updated {count} times)
            </div>
        )
}

export default CountryDetail
