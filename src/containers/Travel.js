import React, { Component } from 'react';
import './Travel.css';
import { Map, TileLayer } from 'react-leaflet'
const position = [51.0, -0.09]

class Travel extends Component {

    render() {
        return (
            <div className="Travel">
              <Map
                style={{height: "100vh"}}
                center={position}
                zoom={10}
                zoomControl={false}>
                <TileLayer
                  url="https://api.mapbox.com/styles/v1/jveach/cj5lqfqfk2q8q2snvlcnag2s9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianZlYWNoIiwiYSI6ImNqNWw1OXQzcTMybWsyeG5xNHNhMm1qbHgifQ.QXS0ZtNdjvyG1PrmkOcUPA"
                  attribution="<attribution>" />
              </Map>
            </div>
        );
    }
}

export default Travel;
