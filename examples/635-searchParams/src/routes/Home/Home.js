import countryData from "../../data/CountryData";
import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const countries = countryData.countries;
    const navigate = useNavigate();

    const countryDetails = (country) => {
        navigate({
            pathname: `${country.id}/${country.name}`,
            search: country.population ? `?population=${country.population}` : null
        })
    }

    return (
        <div className="row">
            <div className="col">
                <h1>Home Component</h1>
                <h2>List of countries</h2>
                <ul className="list-group">
                    {countries.map(country =>
                        <li className="list-group-item"
                            key={country.id}>
                            <a href="#" onClick={() => countryDetails(country)}>
                                {country.name}
                            </a>
                        </li>
                    )}
                </ul>
                <button onClick={() => navigate('/')} className="btn btn-info">Clear</button>
            </div>
            <div className="col">
                <Outlet/>
            </div>
        </div>
    )
}

export default Home
