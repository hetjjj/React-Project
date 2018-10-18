import React, { Component } from 'react';
import Carousel from './utility/Carousel';

class App extends Component {
  render() {
    let name = [<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/8/88/New_York_City-05.jpg"></img>,
    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/3/30/New_York_City-02.jpg"></img>,
    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/c/c4/New_York_City-03.jpg"></img>,
    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/New_York_City-04.jpg"></img>,
    ];
    return (
      <div >
        <Carousel imgFiles={name} />
      </div>
    );
  }
}

export default App;
