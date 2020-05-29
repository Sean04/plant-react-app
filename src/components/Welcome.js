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
    CardActionArea,
    CardMedia,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider
} from '@material-ui/core';

import PlantCard from './PlantCard';
import greystar from '../img/greystar.jpg';
import fern from '../img/fern.jpg';
import lily from '../img/lily.jpg';
import pixie from '../img/pixie.jpg';

const useStyles = makeStyles({
    root: {
        // background: '#eceff1'
    },

    card: {

    },
    
    media: {
    }
})

export default function Welcome() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <br></br>
            <Typography variant="h2">Welcome</Typography>
            <br></br>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={4}>
                    <PlantCard name="Ctenanthe Greystar" img={greystar} about="https://www.flowerpower.com.au/ctenanthe-grey-star-9326974060934p"/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Leatherleaf Fern" img={fern}/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Peace Lily" img={lily}/>
                </Grid>
                <Grid item xs={4}>
                    <PlantCard name="Syngonium Pixie" img={pixie}/>
                </Grid>
            </Grid>
        </Container>
    )
}