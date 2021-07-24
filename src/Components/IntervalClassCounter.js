import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    //To avoid leaks and clean up code...
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>{count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
