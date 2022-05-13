// FileNotFound.js
import {Link} from "react-router-dom";

const FileNotFound = ()=>{
    return(
        <div className="alert alert-danger">
            <h1>Sorry, File or Route not found!</h1>
            <p>
                Please try again from the <Link to="/">Home page</Link>.
            </p>
        </div>
    )
}
export  default FileNotFound
