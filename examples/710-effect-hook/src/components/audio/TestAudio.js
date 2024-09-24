import React, {useState} from 'react';
import AudioUrl from "./AudioUrl";

const TestAudio = () => {
    const audioUrls = [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "https://file-examples.com/storage/fe98627c8766f304393129a/2017/11/file_example_MP3_700KB.mp3",
        "https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
    ];
    const [index, setIndex] = useState(0);

    const nextAudioUrl = () => {
        const newIndex = index < audioUrls.length - 1 ? index + 1 : 0;
        setIndex(newIndex);
    }

    return (
        <div style={{border: '1px solid red', padding: '10px'}}>
            <AudioUrl url={audioUrls[index]}/>
            <p>{audioUrls[index]}</p>
            <button onClick={nextAudioUrl} className="btn btn-outline-primary">Next audio file</button>
        </div>
    );
};

export default TestAudio;
