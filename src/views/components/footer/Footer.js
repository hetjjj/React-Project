import React, { Component } from 'react';
import Carousel from '../utility/Carousel';
import { isClient } from '../../../routing/routingHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.css';

class Footer extends Component {

  componentDidMount() {
    this.handleLazyLoad();
    if (isClient()) {
      document.addEventListener('scroll', this.handleLazyLoad, true);
    }
  }

  componentDidUpdate() {
    this.handleLazyLoad();
  }

  handleLazyLoad() {
    if (isClient()) {
      let viewHeight = window.innerHeight;
      let eles = document.querySelectorAll('img[data-original][lazyload]');
      Array.prototype.forEach.call(eles, function (item) {
        let rect = item.getBoundingClientRect();
        if (item.dataset.original === '') {
          return;
        }

        if (rect.bottom >= 0 && rect.top < viewHeight) {
          let img = new Image();
          img.src = item.dataset.original;
          img.onload = function () {
            item.src = img.src;
          }
          item.removeAttribute('data-original');
          item.removeAttribute('lazyload')
        }
      })
    }
  }

  render() {
    let name = [
      <a target="_blank" href="https://reactjs.org/">
        <img alt="" src="" lazyload="true" data-original="https://cdn-images-1.medium.com/max/2000/1*3SrhT42nL9Sprx6mh6sGnA.png"></img>
      </a>,
      <a target="_blank" href="https://angular.io/">
        <img alt="" src="" lazyload="true" data-original="https://udemy-images.udemy.com/course/750x422/756150_c033_2.jpg"></img>
      </a>,
      <a target="_blank" href="https://spring.io/">
        <img alt="" src="" lazyload="true" data-original="https://cdn-images-1.medium.com/max/1000/1*gycg7f5bYLuR4ut_JAEs7A.png"></img>
      </a>,
      <a target="_blank" href="https://www.oracle.com/technetwork/java/javaee/appmodel-135059.html">
        <img alt="" src="" lazyload="true" data-original="https://sdtimes.com/wp-content/uploads/2017/08/javaee1.png"></img>
      </a>,
    ];
    return (
      <div className={classes.footer}>
        <p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p>
        <h3>Popular Framwork</h3>
        <Carousel imgFiles={name} horizontalMove={810} />
        <p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p><p>This is Content</p>
        <div className={classes.links}>
          <p className={classes.infoText}>WHAT I DO</p>
          <p className={classes.infoText}>"Help sovle complex problems with enthusiasm"</p>
          <p className={classes.infoText}>PROFESSIONAL EMAIL:&nbsp;&nbsp;&nbsp;TANGJIEHE@GMAIL.COM</p>
          <p className={classes.infoText}>SOCIAL LINKS: </p>
          <ul className={classes.icon}>
            <li><a target="_blank" href="https://www.facebook.com/100004421854003"><FontAwesomeIcon icon={faFacebook} size="3x" color="blue" /></a></li>
            <li><a target="_blank" href="https://github.com/hetjjj"><FontAwesomeIcon icon={faGithub} size="3x" color="#23BE52" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin} size="3x" color="#0366d6" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;