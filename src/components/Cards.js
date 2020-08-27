import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography, makeStyles, Grid} from "@material-ui/core"
import CountUp from "react-countup";

const useStyles = makeStyles({
    root: {
        minWidth: 290,
        height: 170,
        borderStyle: "solid",
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderBottomWidth: 10,
        borderBottomColor: "#1e88e5",
        borderRadius: 10
    },
    root2: {
        marginLeft: 40,
        minWidth: 290,
        height: 170,
        borderStyle: "solid",
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderBottomWidth: 10,
        borderBottomColor: "rgb(0,255,0,0.701)",
        borderRadius: 10
    },    
    root3: {
        marginLeft: 40,
        minWidth: 290,
        height: 170,
        borderStyle: "solid",
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        borderBottomWidth: 10,
        borderBottomColor: "rgb(255,0,0,0.701)",
        borderRadius: 10
    },
    title: {
        fontSize: 16
    },
    pos: {
        marginBottom: 12
    }
})
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    const [confirmedValue, setConfirmedValue] = useState(0)
    const [recoveredValue, setRecoveredValue] = useState(0)
    const [deathsValue, setDeathsValue] = useState(0)

    const classes = useStyles()

    useEffect(() => {
        const putToState = () => {
           setConfirmedValue(confirmed)
           setRecoveredValue(recovered)
           setDeathsValue(deaths)
            // return setIt
        }
        putToState()
        // setConfirmedValue(confirmed)
        // console.log(confirmedValue)
    }, )
   
    return (
        <div style={{margin: "50"}}>
        <Grid container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Infected
                </Typography>
                <Typography variant="h5" component="h2">
 
                    <CountUp
                        start={0}
                        end={confirmedValue}
                        duration={1.5}
                        separator=","
                    />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of infected victims <br/> caused by Covid-19
                </Typography>
            </CardContent>
        </Card>

        <Card className={classes.root2}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Recovered
                </Typography>
                <Typography variant="h5" component="h2">
                    <CountUp
                        start={0}
                        end={recoveredValue}
                        duration={1.5}
                        separator=","
                    />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of recoveries <br/>from Covid-19
                </Typography>
            </CardContent>
        </Card>

        <Card className={classes.root3}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Deaths
                </Typography>
                <Typography variant="h5" component="h2">
                    
                    <CountUp
                        start={0}
                        end={deathsValue}
                        duration={1.5}
                        separator=","
                    />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                    Number of deaths <br/> caused by Covid-19
                </Typography>
            </CardContent>
        </Card>
</Grid>
</div>
        
    )
}


export default Cards;