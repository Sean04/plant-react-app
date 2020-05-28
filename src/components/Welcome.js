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

export default function Welcome() {
    return (
        <Container>
            <br></br>
            <Typography variant="h2">Welcome</Typography>
            <br></br>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography>Plant 1</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography>Plant 2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography>Plant 3</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography>Plant 4</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}