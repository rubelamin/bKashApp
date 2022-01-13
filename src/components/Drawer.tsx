import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

type Anchor = 'right';

export default function bKashToggleMenu() {
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = 
        (anchor: Anchor, open: boolean ) => 
        (event: React.KeyboardEvent | React.MouseEvent ) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({...state, [anchor]: open });
        };

        const list = (anchor : Anchor ) => (
            <Box
                
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {['Home', 'Settings', 'Inbox'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon /> }
                                {index === 1 && <SettingsIcon />}
                                {index === 2 &&  <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ) )}
                </List>
                <Divider />
                <List>
                    {['Log Out'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                 <LogoutIcon /> 
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>

                    ))}
                </List>

            </Box>
        );

    return <>
        {(['right'] as const).map((anchor) => (
            <Box key={anchor}>
                <IconButton 
                size="large"
                color="inherit"
                onClick={toggleDrawer(anchor, true)}>
                    <HomeIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </Box>
        ))}
    </>



}