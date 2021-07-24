import React, {useState} from 'react'
// eslint-disable-next-line
import HookMouse from './HookMouse';

function MouseContainer() {

    //You need to clean up after you unmount...
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
