import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/styles';
import 'typeface-roboto';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

const MuiAppBar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles} variant="h4">
                    <Link href='/' color="inherit">Plant Me</Link>
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DashboardIcon />}
                    href="/dashboard">
                    Dashboard
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default MuiAppBar;