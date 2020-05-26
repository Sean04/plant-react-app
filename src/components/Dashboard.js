import React, { useState } from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { 
    Paper,
    Container,
    Button,
    Grid,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider
} from '@material-ui/core';

import { FaTemperatureHigh, FaSun } from 'react-icons/fa';
import { GiZigzagLeaf, GiWaterDrop } from 'react-icons/gi';

import LineChart from './LineChart';

const useStyles = makeStyles({
    root: {
        padding: '30px 30px 30px 30px'
    }
})

export default function Dashboard() {
    // Note: For useState the initial state does not matter, only
    // used for reference for variable names.
    const [data, setData] = useState({
        Temperature: 0,
        Humidity: 0,
        Soil_Moisture: 0,
        Light: 0,
        Date: Date.now()
    });
    
    const classes = useStyles();

    var dataObjects = []

    var graphDataPoints = []

    function assignDataPoints(item, index) {
        var d = new Date(item.Date);
        console.log(d);

        console.log(typeof item.Date)
        graphDataPoints.push({
            x: item.Temperature,
            y: item.Date
        });
    }

    const updateData = () => {
        fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(new_data => {
            console.log(new_data);
            dataObjects = new_data;
            setData(new_data[new_data.length-1]);
            console.log(data)

            dataObjects.forEach(assignDataPoints);
            console.log(graphDataPoints);
        });
    };

    return (
        <Container >
            <Paper className={classes.root} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Dashboard</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4">Current Status:</Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaTemperatureHigh/>
                                            </ListItemAvatar>
                                            <ListItemText primary="Room Temperature:" secondary={data.Temperature} />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <GiZigzagLeaf />
                                            </ListItemAvatar>
                                            <ListItemText primary="Humidity:" secondary={data.Humidity} />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <GiZigzagLeaf />
                                            </ListItemAvatar>
                                            <ListItemText primary="Soil Temperature:" secondary="0" />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <GiWaterDrop />
                                            </ListItemAvatar>
                                            <ListItemText primary="Soil Moisture:" secondary={data.Soil_Moisture} />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaSun />
                                            </ListItemAvatar>
                                            <ListItemText primary="Light:" secondary={data.Light} />
                                        </ListItem>

                                    </List>
                                <p>Last updated: {data.Date}</p>
                                <Button color="primary" onClick={updateData}>Update</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <LineChart />
                            </CardContent>
                        </Card>
                    </Grid>
                </ Grid>
            </Paper>
        </Container>
    )
}
