import React, {useState} from 'react';

const TextBox = (props) => {
    const [msg, setMsg] = useState('')

    // handle Enter key from textbox
    const handleKey = event => {
        if (event.key === 'Enter') {
            // call increment function on the props, pass in the numeric value of textbox

        }
    }
    return (
        <div>
            <h2>Type a message: </h2>
            <input type="number"
                   className="form-control-lg"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyDown={(e) => handleKey(e)}
                   placeholder="number..."/>
        </div>
    );
}

export default TextBox;
