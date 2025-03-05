// CountryDetail - fetching parameters from the URL and retrieving the correct country
import countryData from "../../data/CountryData";
import {useParams} from "react-router-dom";

const CountryDetail = () => {
    // We are passing in a country ID and name, we retrieve them from
    // the useParams() hook.
    // Here we assign them to simple variables, but we could have used state
    // with the useState() hook of course.
    const params = useParams();
    const countries = countryData.countries;
    const id = params.id;
    const getCountry = id => countries.find(c => c.id === +id)
    const country = getCountry(id);

    return (
        <div >
            <h3>Details for country</h3>
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
                {/*Some vite magic below, to resolve the correct image*/}
                <li className="list-group-item">
                    <img
                        className="img-fluid"
                        src={new URL(`../../img/countries/${country.img}`, import.meta.url).href}
                        alt={country.name}/>
                </li>
            </ul>
        </div>
    );
}

export default CountryDetail;
