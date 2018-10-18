import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 0, move: 0, style: null }
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }

    onLeftClick() {
        let length = this.props.imgFiles.length;
        this.setState(state => {
            return {
                index: state.index - 1 >= 0 ? state.index - 1 : length - 1,
                move: state.move + 840,
                style: { transform: `translateX(${state.move + 840}px)` }
            }
        })
    }

    onRightClick() {
        let length = this.props.imgFiles.length;
        this.setState(state => {
            return {
                index: state.index + 1 < length ? state.index + 1 : 0,
                move: state.move - 840,
                style: { transform: `translateX(${state.move - 840}px)` }
            }
        })
    }

    renderImages() {
        return this.props.imgFiles.map((ele) => {
            return (<li key={`${ele.props.src}`}>{ele}</li>)
        })
    }

    render() {
        let length = this.props.imgFiles.length;
        let displayLeftButton = this.state.index - 1 >= 0;
        let displayRightButton = this.state.index + 1 < length;
        return (
            <div className="Carousel">
                <button onClick={this.onLeftClick} className={displayLeftButton ? "leftArrow" : "notVisible"}></button>
                <ul style={this.state.style}>
                    {this.renderImages()}
                </ul>
                <button onClick={this.onRightClick} className={displayRightButton ? "rightArrow" : "notVisible"}></button>
            </div>
        );
    }
}

export default Carousel