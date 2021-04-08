import React from 'react';

const HelloWorld: React.FC = () => {
    const msg:string= 'Hello Zutphen';
    return (
        <div>
            <h1>{msg} from TS component </h1>
        </div>
    )
};
export default HelloWorld;
