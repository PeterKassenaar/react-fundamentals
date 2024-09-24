import React from 'react';

// 0. Import the Context stuff. We set a 'theme' for a button (ligth or dark)
import ThemeProvider from "./components/ThemeProvider";
import ThemedButton from "./components/ThemedButton";


// 1. Main App component
const App = () => {
  return (
      // See 1. ThemeContext.js
      // See 2 + 3. ThemeProvider.js
      // See 4 + 5. ThemedButton.js

      // 6. Wrap components that need access to the context with the Provider
      <ThemeProvider>
        <div className="container">
          <h1>React Context Example</h1>
          {/*  This means that a deeply nested component like <ThemedButton /> has access
               to the context, WITHOUT passing/drilling down props. */}
          <ThemedButton />
        </div>
      </ThemeProvider>
  );
};

export default App;
