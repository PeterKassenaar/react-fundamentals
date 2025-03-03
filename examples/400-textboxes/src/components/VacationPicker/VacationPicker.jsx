// VacationPicker.jsx - a simple React Vacation Picker component.

const VacationPicker = ({countries}) => {
    return (
        <div>
            <ul className="list-group">
                {countries.map(country =>
                    <li className="list-group-item"
                        key={country.id}
                        id={country.id}
                        title={country.details}
                    >
                        {country.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default VacationPicker
