import React, {useState, useEffect} from 'react'
import {Cards, CountryPicker, Chart} from "./components"
import { AppBar, Typography, makeStyles } from '@material-ui/core/'
import styles from "./App.module.css";

import {fetchData} from "./components/api"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // color: "#F7F7F7"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}))



function App() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState("")

    const classes = useStyles()

    useEffect(() => {
        const fetchedData = async () => {
            setData(await fetchData())
        }
        fetchedData()
        // console.log(data)
    },[])

    // Function to obtain the selected country from CountryPicker and update the local data state
    const handleCountryChange = async (countryName) => {
        const fetchedData = setData(await fetchData(countryName))
        setCountry(countryName)
        return fetchedData
    }


    return (
        <div className={classes.root}>
            <AppBar style={{flexGrow: 1, marginBottom: 30}}>
                <Typography variant="h5" style={{backgroundColor: "#1e88e5", flexGrow: 1, textAlign: "center", paddingTop: 20, paddingBottom: 20}}>
                    COVID-19 TRACKER
                </Typography>
            </AppBar>
            <br/>
            <p style={{marginTop: 110}}></p>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <p style={{marginTop: 20}}></p>
            <Chart country={country} data={data}/>
        </div>
    )
}

export default App;