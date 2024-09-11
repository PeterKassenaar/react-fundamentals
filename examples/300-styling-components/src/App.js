import React from 'react';

// components
import InlineStyles from "./Components/InlineStyles/InlineStyles";
import CssModules from "./Components/cssModules/CssModules";
import SassComponent from "./Components/SassComponent/SassComponent";

//*************************
// Uncomment the respective components (InlineStyles, CssModules and SassComponent)
// to see their output. Study the source files for more details
//*************************

// App.js
function App() {
	return (
		<div className="container">
			<div className="row">
				{/* 1. Usage of global styles below*/}
				<div className="col-6">
					<p>1. Using global (Bootstrap) classes:</p>
					<h1 className="alert alert-info">My awesome bootstrap site</h1>
				</div>
				<div className="col-6">
					{/*2. Usage of Inline style (in JS-object notation) in component below */}
					<InlineStyles/>

					{/*<div style={headline}>*/}
					{/*	This div has no '.headline' style, as it is enclosed in the above component.*/}
					{/*	It will throw a compiler error.*/}
					{/*</div>*/}
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<hr/>
					{/*3. Usage of CSS Modules: */}
					{/*<CssModules/>*/}
				</div>
				<div className="col-6">
					<hr/>
					{/*4. Using the Sass CSS preprocessor: */}
					{/*<SassComponent/>*/}
				</div>
			</div>
		</div>
	);
}

export default App;
