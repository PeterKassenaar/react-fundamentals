import React, {Component} from 'react';
import styles from './cssModules.module.css'

class CssModules extends Component {
	render() {
		return (
			<div>
				<p>3. using CSS Modules:</p>
				<div className={styles.warning}>
					This is the .warning class from a CSS module
				</div>
				<div className={styles.info}>
					This is the .info class from a CSS module
				</div>
			</div>
		);
	}
}

export default CssModules;
