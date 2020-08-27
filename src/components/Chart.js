import React, {useState, useEffect} from 'react'
import {Line, Bar} from "react-chartjs-2"
import {fetchDailyData} from "./api"


const Chart = ({
    data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])

    // Fetching daily data from api.js
    useEffect(() => {
        const fetchedData = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchedData()
    }, [])

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [
                    {
                        data: dailyData.map(({confirmedTotal}) => confirmedTotal),
                        label: "Infected",
                        fill: true,
                        // backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: "#1e88e5",
                        borderWidth: 2,
                        
                    },
                    {
                        data: dailyData.map(({deathTotal}) => deathTotal),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true,
                        borderWidth: 2,
                        
                    }
                ]
            }}
        />
    ) : null

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [{
                    label: "People",
                    backgroundColor: [
                        "#1e88e5",
                        "rgb(0,255,0,0.701)",
                        "rgb(255,0,0,0.701)"
                    ],
                    data:[confirmed, recovered, deaths]
                }
                    
                ]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current State in ${country}` }
            }}
        />
    ) : null

    return (
        <div style={{display: "flex", justifyContent: "center", width: "85%"}}>
        {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;