import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {

    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        const response = await axios.get(changeableUrl)

        const modifiedData = {
            confirmed: response.data.confirmed.value,
            recovered: response.data.recovered.value,
            deaths: response.data.deaths.value,
            lastUpdate: response.data.lastUpdate
        }
        console.log(modifiedData)
        return modifiedData
    }
    catch (error) {
         console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${url}/countries`)
        const modifiedData = response.data.countries.map((country) => {
            return country.name
        })
        console.log(modifiedData)
        return modifiedData
    }
    catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`)

        const modifiedData = response.data.map(value => ({
            confirmedTotal: value.confirmed.total,
            deathTotal: value.deaths.total,
            date: value.reportDate
        }))

        console.log(modifiedData)
        return modifiedData
    }
    catch (error) {
        console.log(error)
    }
}