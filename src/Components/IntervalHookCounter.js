import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1); //Using prev count gets rid of dependency list.
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
    
        //MIMICS UNMOUNTING PROCESS.
        return () => {
            clearInterval(interval);
        }
    }) //ADD EMPTY ARRAY TO MAKE IT ONLY GO ONCE UPON INITIAL RENDER.

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
