// 404 - file not found component
import React, {Component} from 'react';
import styles from './FileNotFound.module.css'
class FileNotFound extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.heading}>404</h1>
                <h2 className={styles.subheading}>Sorry, File not found</h2>
            </div>
        );
    }
}

export default FileNotFound;
