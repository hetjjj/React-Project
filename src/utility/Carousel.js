import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 }
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onLeftClick() {
        this.setState((state) => {
            if (state.index - 1 < 0) {
                return { index: this.props.imgFiles.length - 1 }
            } else {
                return { index: state.index - 1 }
            }
        })
    }

    onRightClick() {
        let length = this.props.imgFiles.length;
        this.setState((state) => {
            return { index: (state.index + 1) % length }
        })
    }

    renderImages() {
        return this.props.imgFiles.map((ele, index) => {
            return (<li className={index === this.state.index ? '' : "isDisabled"}key={`${ele.props.src}`}>{ele}</li>)
        })
    }

    render() {
        return (
            <div className="Carousel">
                <button onClick={this.onLeftClick} className="leftArrow"></button>
                <ul>
                    {this.renderImages()}
                </ul>
                <button onClick={this.onRightClick} className="rightArrow"></button>
            </div>
        );
    }
}

export default Carousel