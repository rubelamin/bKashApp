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
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

import { Link } from "react-router-dom";

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

        const bMenuList = [
            {
                text: 'Home',
                url: '/Home',
                component: <HomeIcon color="primary" />,
            },
            {
                text: 'Statements',
                url: '/Statements',
                component: <BarChartOutlinedIcon color="primary" />,
            },
            {
                text: 'Limits',
                url: '/Limits',
                component: <WarningAmberRoundedIcon color="primary" />,
            },
            {
                text: 'Coupons',
                url: '/Coupons',
                component: <LocalOfferOutlinedIcon color="primary" />,
            },
            {
                text: 'Refer bKash App',
                url: '/ReferbKashApp',
                component: <GroupOutlinedIcon color="primary" />,
            },
            {
                text: 'bKash Map',
                url: '/bKashMap',
                component: <LocationOnOutlinedIcon color="primary" />,
            },
            {
                text: 'Discover bKash',
                url: '/DiscoverbKash',
                component: <AvTimerOutlinedIcon color="primary" />,
            },
            {
                text: 'Settings',
                url: '/Settings',
                component: <SettingsIcon color="primary" />,
            },
            {
                text: 'Support',
                url: '/Support',
                component: <SupportAgentOutlinedIcon color="primary" />,
            }
        ];

        const list = (anchor : Anchor ) => (
            <Box
                
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <Stack spacing={2} sx={{ pt: 2, pl: 4 }}>
                    <Stack direction="row" spacing={1}>
                        <Typography color="primary">
                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                                bKash</Box> Menu
                        </Typography>
                    </Stack>
                </Stack>
                <List>
                    {bMenuList.map((items, index) => (
                        <ListItem button key={ 'gg' + index} component={Link} to={items.url}>
                            <ListItemIcon>
                               {items.component}
                            </ListItemIcon>
                            <ListItemText primary={items.text} />
                        </ListItem>
                    ) )}
                </List>
                <Divider />
                <List>
                    {['Log Out'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                 <LogoutIcon color="primary" /> 
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