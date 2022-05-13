import countryData from "../../data/CountryData";
import {Link, Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const countries = countryData.countries;
    const navigate = useNavigate();

    return (
        <div className="row">
            <div className="col">
                <h1>Home Component</h1>
                <h2>List of countries</h2>
                <ul className="list-group">
                    {countries.map(country =>
                        <li className="list-group-item"
                            key={country.id}>
                            <Link to={`${country.id}/${country.name}`}>
                                {country.name}
                            </Link>
                        </li>
                    )}
                </ul>
                <button onClick={()=>navigate('/')} className="btn btn-info">Clear</button>
            </div>
            <div className="col">
               <Outlet />
            </div>
        </div>
    )
}

export default Home
