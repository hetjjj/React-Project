import React, { Component } from 'react';
import classes from './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 0, move: 0, style: null }
        this.onLeftClick = this.onLeftClick.bind(this);
        this.onRightClick = this.onRightClick.bind(this);
    }


    onLeftClick() {
        let length = this.props.imgFiles.length;
        let horizontalMove = this.props.horizontalMove;
        this.setState(state => {
            return {
                index: state.index - 1 >= 0 ? state.index - 1 : length - 1,
                move: state.move + horizontalMove,
                style: { transform: `translateX(${state.move + horizontalMove}px)` }
            }
        })
    }

    onRightClick() {
        let length = this.props.imgFiles.length;
        let horizontalMove = this.props.horizontalMove
        this.setState(state => {
            return {
                index: state.index + 1 < length ? state.index + 1 : 0,
                move: state.move - horizontalMove,
                style: { transform: `translateX(${state.move - horizontalMove}px)` }
            }
        })
    }

    renderImages() {
        return this.props.imgFiles.map((ele) => {
            return (<li key={`${ele.props.href}`}>{ele}</li>)
        })
    }

    render() {
        let length = this.props.imgFiles.length;
        let displayLeftButton = this.state.index - 1 >= 0;
        let displayRightButton = this.state.index + 1 < length;
        return (
            <div className={classes.carousel}>
                <button onClick={this.onLeftClick} className={displayLeftButton ? classes.leftArrow : classes.notVisible}></button>
                <ul style={this.state.style}>
                    {this.renderImages()}
                </ul>
                <button onClick={this.onRightClick} className={displayRightButton ? classes.rightArrow : classes.notVisible}></button>
            </div>
        );
    }
}

export default Carousel