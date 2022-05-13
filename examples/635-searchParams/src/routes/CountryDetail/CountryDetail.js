// CountryDetail - fetching parameters from the URL and retrieving the correct country
import countryData from "../../data/CountryData";
import {useParams, useSearchParams} from "react-router-dom";

const CountryDetail = () => {
    // We are passing in a country ID and name, we retrieve them from
    // the useParams() hook.
    // Here we assign them to simple variables, but we could have used state
    // with the useState() hook of course.
    let params = useParams();
    const countries = countryData.countries;
    const id = params.id;
    const getCountry = id => countries.find(c => c.id === +id)
    const country = getCountry(id);

    // We now also use population as a query parameter.
    // It is handled by useSearchParams().
    // Further reading: https://ultimatecourses.com/blog/query-strings-search-params-react-router
    const [searchParams] = useSearchParams()
    const population = searchParams.get('population');

    return (
        <div>
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
                {
                    population &&
                    <li className="list-group-item">
                        Population: {population}
                    </li>
                }
                <li className="list-group-item">
                    details: {country.details}
                </li>
                {/*Some webpack magic below, to resolve the correct image*/}
                <li className="list-group-item">
                    <img
                        className="img-fluid"
                        src={require(`../../img/countries/${country.img}`)}
                        alt={country.name}/>
                </li>
            </ul>
        </div>
    );
}

export default CountryDetail;
