import React, { Component } from 'react';
 
// npm i react-country-region-selector
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
 
class Pickcountry extends Component {
  constructor (props) {
    super(props);
    this.state = { country: ''};
  }
 
  selectCountry (val) {
    this.setState({ country: val });
  }
 
  render () {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
      </div>
    );
  }
}
export default Pickcountry;