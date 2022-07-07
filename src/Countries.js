import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
 
 
class Countries extends Component {

state = { 
    country: '', 
};

 
selectCountry = (val) => {
    this.setState({country: val})
    this.props.handleCountryChange(val)
  }
 

  render () {
    let { country } = this.state;
    let defaultOptionLabel = ""
    country === "Aruba" || !country ?
      defaultOptionLabel="Select a country to search" 
      :
      defaultOptionLabel=country
    
    
    return (
      <div>
        <CountryDropdown
          value={country}
          defaultOptionLabel={defaultOptionLabel}
          // priorityOptions={["AU"]}
          onChange={(val) => this.selectCountry(val)} />
      </div>
    );
  }
}

export default Countries