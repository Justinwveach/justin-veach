import React, { Component } from 'react';
import ScrollEvent from 'react-onscroll';
import ReactDOM from 'react-dom';
import './PageCard.css';
import windowSize from 'react-window-size';

/**
 * index - starts at 1
 */
export default function wrappedInPageCard(WrappedComponent, index) {

    const stickyClass = "PageCard--sticky";
    const defaultClass = "PageCard--default";

    // todo register windowDidResize to adjust offsetToHide

/*
    function offsetToHide() {
        let offset = window.innerHeight * -1;// (index * window.innerHeight) * -1;
        console.log(offset);
        return offset;
    }
    */

    var offsetToHide = 0;

    return class extends Component {

        constructor(props) {
            super(props);
            this.handleScrollCallback = this.handleScrollCallback.bind(this);
            this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

            this.state = {
                sticky: index === 1 ? true : false,
                isVisible: true
            }
        }

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);

            offsetToHide = window.innerHeight * -1;

            var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
            console.log("Index: " + index + " is at " + rect.y + " with offset to hide: " + offsetToHide);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        }

        updateWindowDimensions() {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }

        handleScrollCallback() {
            var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

            if (!this.state.sticky) {
                if (rect.y <= 0) {
                    this.setState({
                        sticky: true
                    });
                }
            }
            else if (this.state.sticky) {
                if (rect.y > 0) {
                    this.setState({
                        sticky: false
                    });
                }
                else if (rect.y < offsetToHide && this.state.isVisible) {
                    this.setState({
                        isVisible: false
                    });
                }
                else if (!this.state.isVisible) {
                    if (rect.y >= offsetToHide) {
                        this.setState({
                           isVisible: true
                       });
                    }
                }
            }
        }

        render() {
            return(
                <div className={this.state.isVisible ? "PageCard" : "PageCard PageCard--hidden"}>
                    <WrappedComponent isSticky={this.state.sticky ? "PageCard--sticky" : "PageCard--default"} {...this.props}/>
                    <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
                </div>

            );
        }
    }
}