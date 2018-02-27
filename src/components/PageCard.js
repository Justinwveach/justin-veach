import React, { Component } from 'react';
import ScrollEvent from 'react-onscroll';
import ReactDOM from 'react-dom';
import './PageCard.css';
import windowSize from 'react-window-size';
import MobileDetect from 'mobile-detect';

/**
 * index - starts at 1
 */
export default function wrappedInPageCard(WrappedComponent, index, fullScreen) {

    const stickyClass = 'PageCard-content--sticky ';
    const defaultClass = 'PageCard-content--default';

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
            this.getComponent = this.getComponent.bind(this);

            var md = new MobileDetect(window.navigator.userAgent);

            this.state = {
                sticky: index === 1 ? true : false,
                isVisible: true,
                index: index,
                isMobile: md.phone() !== null || md.tablet() !== null
            }
        }

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);

            offsetToHide = window.innerHeight * -1;

            var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        }

        updateWindowDimensions() {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }

        handleScrollCallback() {
            if (this.state.isMobile) {
                return;
            }

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

        getRootClasses() {
            var classNames = this.state.isVisible ? 'PageCard' : 'PageCard PageCard--hidden';
            if (this.state.index !== 1 && this.state.isMobile === false) {
                classNames = classNames + ' PageCard-spacer';
            }

            if (this.state.isMobile === false || fullScreen) {
                classNames = classNames + ' PageCard--default';
            } else {
                classNames = classNames + ' PageCard--mobile';
            }

            return classNames;
        }

        getContentClasses() {
            var classNames = '';
            if (this.state.sticky && !this.state.isMobile) {
                classNames = 'PageCard-content--sticky';
            }
            else if (this.state.isMobile) {
                classNames = 'PageCard-content--mobile';
            }
            else {
                classNames = 'PageCard-content--default';
            }

            return classNames;
        }

        getComponent(mobileVersion) {
            return (
                <div className={this.getRootClasses()}>
                    {/* rootClass is the main class that needs to be applied to the WrappedComponent */}
                    <WrappedComponent isSticky={this.getContentClasses()} rootClass="PageCard-content" {...this.props}/>
                    <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
                </div>
            );
        }

        render() {
            return(
                this.getComponent(this.props.isMobile)
            );
        }
    }
}
