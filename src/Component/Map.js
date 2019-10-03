import React,{Component} from 'react';
import {connect} from 'react-redux'
import MapPin from '../Component/MapPin'
import ReactMapGL, {Marker, NavigationControl,GeolocateControl,FullscreenControl} from 'react-map-gl';
import SearchBar from '../Component/LeftMenu/Filters/SearchBar'
const fullscreenControlStyle = { position: 'absolute', top: 0, left: 0, padding: '10px' };
const navStyle = {position: 'absolute', top: 36, left: 0, padding: '10px' };
class Map extends Component {
  
  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 3
    }
  };
  _updateViewport = viewport => {this.setState({viewport:viewport});}
  _renderCityMarker = (city) => {
    return (
              <Marker key={city.latitude} longitude={city.longitude} latitude={city.latitude}>
                <MapPin size={20} onClick={() => this.setState({popupInfo: city})} color='#FFFF00'/>
              </Marker>
            );
          };  
  
  render() {
    console.log(this.props.state)
    return (
      <ReactMapGL 
      mapboxApiAccessToken={"pk.eyJ1IjoiYXRzdWRkbGUiLCJhIjoiY2p6bDh2djJkMHN5ZjNocGdodmo5OWFkOSJ9.zykn3g7M3ZZTkntMv_AmJw"}
        {...this.state.viewport}
        width="750px"
        height="650px"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={this._updateViewport}>
          {this.props.state.map(this._renderCityMarker)}
          <GeolocateControl 
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
         style={{float:"right"}}/>
        <div className="fullscreen" style={fullscreenControlStyle}>
        <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
        <NavigationControl />
        </div>
        </ReactMapGL>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    state :state
  }
}

export default  connect(mapStateToProps)(Map)