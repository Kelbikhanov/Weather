import React from 'react';


class Weather extends React.Component {

    render() {
        return (
<div className="infoWeath">
    <p className="error">{this.props.error}</p>
    <p>Местоположение: {this.props.city} {this.props.country}</p>
    <p>Температура: {this.props.temp}</p>
    <p>Давление: {this.props.pressure}</p>
    <p>Заход солнца: {this.props.sunset}</p>  
    
</div>
        
        );
    }
}

export default Weather;