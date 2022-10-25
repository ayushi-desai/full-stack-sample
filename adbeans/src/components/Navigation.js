
import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import { Outlet, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(10),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));
function Navigation() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" >
                        Crypto App
                    </Typography>
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                            List
                        </Link>
                        <Link to="/about" className={classes.link}>
                            About
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
};

export default Navigation;