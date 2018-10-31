import React, { Component } from 'react';
import Carousel from '../utility/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.css';

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
      <div className={classes.footer}>
        <h3>Popular Framwork</h3>
        <Carousel imgFiles={name} horizontalMove={100} />
        <div>
          <ul>
            <li><a href="https://www.facebook.com/100004421854003"><FontAwesomeIcon icon={faFacebook} size="3x" color="blue"/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin} size="3x" color="#0366d6"/></a></li>
            <li><a href="https://github.com/hetjjj"><FontAwesomeIcon icon={faGithub} size="3x" color="#23BE52"/></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;