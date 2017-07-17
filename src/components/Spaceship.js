// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
        <p>Colors: </p>
        <ul>
          {this.props.colors.map(color => <li>{color}</li>)}
        </ul>
      </div>
    )
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
