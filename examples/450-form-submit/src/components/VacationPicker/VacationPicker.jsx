// VacationPicker.js - a simple React Vacation Picker component.
// We opted for using function-based components here.

const VacationPicker = ({ countries }) => (
    <div>
        <ul className="list-group">
            {countries.map(country =>
                <li
                    className="list-group-item"
                    key={country.id}
                    id={country.id}
                    title={country.details}>
                    {country.name}
                </li>
            )}
        </ul>
    </div>
);

export default VacationPicker;
