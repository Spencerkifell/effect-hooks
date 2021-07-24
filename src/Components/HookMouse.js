import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouse = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    //We want the effect to be called once on initial render. Empty array mimics this...
    useEffect(() => {
        console.log("useEffect called...")
        window.addEventListener('mousemove', logMouse)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMouse)
        }
    }, [])

    return (
        <div>
            <p>X = {x}, Y = {y}</p>
        </div>
    )
}

export default HookMouse
