import React, { Component } from 'react';
import './Home.css';
import PageCard from '../components/PageCard'

class Home extends Component {

    constructor(props) {
        super(props);
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
    }

  render() {
    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
}

export default Home;
