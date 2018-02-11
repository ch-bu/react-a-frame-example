import React from 'react';
import 'aframe';
import {Entity} from 'aframe-react';

class App extends React.Component {
  constructor(props) {
    super(props);

    var self = this;

    this.state = {colors: ['green', 'yellow', 'blue',
                           'grey', 'steelblue'],
                  currentColor: 'green'};

    setInterval(function() {
      let item = self.state.colors[Math.floor(Math.random() *
        self.state.colors.length)];

      self.setState({currentColor: item});

    }, 5000);

  }

  render() {
    return (
      <a-scene>
        <Entity
          geometry={{primitive: "box"}}
          position="-1 0.5 -3"
          rotation="0 45 0"
          material={"color: " + this.state.currentColor} />

        <a-sky color="#ECECEC"></a-sky>
        
      </a-scene>
    );
  }
}

export default App;
