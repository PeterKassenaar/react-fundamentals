import {useContext} from "react";
import ThemeContext from "./ThemeContext";

// 4. Create a component that consumes the context value (see
//   ThemeProvider.js)
const ThemedButton = () => {

    // 5. Use the useContext hook to access the context value.
    // Note that the values are NOT drilled down as props.
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
            }}
        >
            Toggle Theme
        </button>
    );
};

export default ThemedButton
