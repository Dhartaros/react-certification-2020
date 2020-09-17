import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        color: 'black',
    },
    textWithIcon: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const history = useHistory();
    const { authenticated, logout } = useAuth();
    const [anchorOpen, setAnchorOpen] = React.useState(false);

    function deAuthenticate(event) {
        event.preventDefault();
        logout();
        history.push('/');
    }
    
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
    
        setAnchorOpen(open);
    };

    return(
        <div>
            <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={anchorOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            >
            <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                <ListItem>
                    <Link to="/" className={classes.link}>
                    <div className={classes.textWithIcon}>
                        <HomeOutlinedIcon /> Home
                    </div>
                    </Link>
                </ListItem>
                </List>
                <Divider />
                {authenticated ? (
                <List>
                    <ListItem>
                    <Link to="/favorites" className={classes.link}>
                        <div className={classes.textWithIcon}>
                        <FavoriteBorderIcon />
                        Favorites
                        </div>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link to="" className={classes.link} onClick={deAuthenticate}>
                        <div className={classes.textWithIcon}>
                        <ExitToAppIcon />
                        Logout
                        </div>
                    </Link>
                    </ListItem>
                </List>
                ) : (
                <List>
                    <ListItem>
                    <Link to="/login" className={classes.link}>
                        Sign In
                    </Link>
                    </ListItem>
                </List>
                )}
            </div>
        </SwipeableDrawer>
        </div>
        
    )
}