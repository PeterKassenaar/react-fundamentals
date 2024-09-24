import React, {useEffect, useRef} from 'react';
// 1. The component below does NOT work, due to how the browser handles <audio> elements.
// The src of the child source element was set to your urls prop when it was first
// mounted. So when the url prop changes, React does not re-render the audio
// and source element and hence the source of the audio file is not updated.
// const AudioUrl = ({url}) => {
//     return (
//         <div>
//             <audio controls>
//                 <source src={url} type="audio/ogg"/>
//                 Your browser does not support the audio element.
//             </audio>
//         </div>
//     );
// };


// 2. We have to use the useEffect() hook to trigger
// side effects changing the source and load the
// audio whenever the url prop changes
const AudioUrl = ({ url }) => {
    // Creates a 'ref' to access the audio element directly.
    const audioRef = useRef();

    useEffect(() => {
        // Checks if the audio element exists
        if (audioRef.current) {
            // Assigns the new url to the audio element src and reloads it.
            audioRef.current.src = url;
            audioRef.current.load();
        }
    }, [url]);  // The use effect hook runs whenever the url prop changes

    return (
        <div>
            <audio ref={audioRef} controls>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioUrl;
