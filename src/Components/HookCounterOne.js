import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //In order to conditionally run effect, use second parameter.
    useEffect(() => {
        console.log("Updating document title");
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <button
                onClick={() => setCount(count + 1)}
            >
                Clicked {count} times
            </button>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
    )
}

export default HookCounterOne