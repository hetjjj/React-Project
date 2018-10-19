import React, { Component } from 'react';
import Carousel from '../../utility/Carousel';
import './Footer.css';

class Footer extends Component {
  render() {
    let name = [
      <a href="https://reactjs.org/">
        <img alt="" src="https://cdn-images-1.medium.com/max/2000/1*3SrhT42nL9Sprx6mh6sGnA.png"></img>
      </a>,
      <a href="https://angular.io/">
        <img alt="" src="https://udemy-images.udemy.com/course/750x422/756150_c033_2.jpg"></img>
      </a>,
      <a href="https://spring.io/">
        <img alt="" src="https://cdn-images-1.medium.com/max/1000/1*gycg7f5bYLuR4ut_JAEs7A.png"></img>
      </a>,
      <a href="https://www.oracle.com/technetwork/java/javaee/appmodel-135059.html">
        <img alt="" src="https://sdtimes.com/wp-content/uploads/2017/08/javaee1.png"></img>
      </a>,
    ];
    return (
      <div className="footer">
        <h3>Popular Framwork</h3>
        <Carousel imgFiles={name} horizontalMove={1010} />
        <div>
          <ul>
            <li><a href="https://www.facebook.com/100004421854003">Facebook</a></li>
            <li><a href="">Linkedin</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;