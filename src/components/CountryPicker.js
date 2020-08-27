import React, {useState, useEffect} from 'react'
import { makeStyles, Select, NativeSelect, FormControl, InputLabel } from '@material-ui/core'
import {fetchCountries} from "./api"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(7),
    },
  }));


const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([])
    const [countryName, setCountryName] = useState("")
    
    const classes = useStyles()

    // Function to get the output of the selected country
    const handleSelectedCountry = (country) => {
        console.log(country)
        handleCountryChange(country)

        setCountryName(country)
        
    }
    
    // Function to fetch the countries from api.js, and update the countries state
    useEffect(() => {
      const fetchingCountries = async () => {
        setCountries(await fetchCountries())
      }
      fetchingCountries()
    }, [])

    return (
        <FormControl className={classes.formControl}>


        <NativeSelect
          value={countryName}
          onChange={(e) => handleSelectedCountry(e.target.value)}
          className={classes.selectEmpty}
        >
          <option value="">Global</option>
          {/* <option value={country}></option> */}
          {countries.map((country, i) => (
            <option value={country} key={i}>{country}</option>
          ))}
        </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;