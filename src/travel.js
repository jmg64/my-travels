import React, {Component} from 'react';


class Travel extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.destination}</h1>
                <h3>{this.props.country}</h3>
                <p>This planet is at {this.props.distance} from Earth</p>
                <img src={this.props.photo} />
             </div>
        )

    }
}


export default Travel;