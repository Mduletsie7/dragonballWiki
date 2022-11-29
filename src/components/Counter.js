import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrememnt() {
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('Callback value', this.state.count)
    }
    )
        console.log(this.state.count);
    }

    render () {
        return ( 
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.incrememnt()}>Incremement</button>
        </div> 
        )
    }
}

export default Counter