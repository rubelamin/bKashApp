import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import PaidIcon from '@mui/icons-material/Paid';
import { makeStyles } from '@mui/styles';

import Drawer from './Drawer';

const useStyles = makeStyles(() => ({
    displayNone: {
      display: 'none',
    },
    bgBalance: {
      background: '#FFFFFF',
    },
    headerCss: {
      background: '#ee0290',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    toolbarPadding: {
      paddingLeft: '5px',
      paddingRight: '5px',
    },
    avatarWH: {
      width: 54, 
      height: 54
    },
}));

export default function bkashAppBar() {

  const classes = useStyles();

  const [selected, setSelected] = useState(true);

  const switchControler = <Switch 
                            onChange={event => setSelected(event.target.checked) } 
                            color="primary" 
                            checked={selected}
                            className={classes.displayNone}
                          />

  const balanceText = <Chip 
        icon={<PaidIcon />}
        label="Tap For Balance"
        color="primary"
        className={classes.bgBalance}
        variant="outlined" />;
  const balanceBDT = <Chip 
        icon={<PaidIcon />}
        label="5000 BDT"
        color="primary"
        className={classes.bgBalance}
        variant="outlined" />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.headerCss}>
        <Toolbar className={classes.toolbarPadding}>
          <Grid container>
            <Grid item xs={2}>
              <Stack direction="column" spacing={2}>
                <Avatar 
                  alt="Profile" 
                  src="https://mui.com/static/images/avatar/2.jpg"
                  className={classes.avatarWH}
                />
              </Stack>
            </Grid>
            <Grid item xs={7}>
              <Stack spacing={0} direction="column">
                <Stack direction="row" sx={{ pl: '10px', mt: '1px' }}>
                  <Typography
                    variant="body2"
                    color="inherit"
                    noWrap
                    component="span"
                  >
                    User Name
                  </Typography>
                </Stack>
                <Stack direction="row" mt={0}>
                  <FormControlLabel
                    value={selected ? balanceText : balanceBDT }
                    control={switchControler}
                    label={selected ? balanceText : balanceBDT }
                    labelPlacement={selected ? "start" : "start"}
                    sx={{ ml: '5px' }}
                  />
                </Stack>
              </Stack>
            </Grid>
            
            
            <Grid item xs={3}>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <EmojiEventsIcon />
                  </Badge>
                </IconButton>
                <Drawer />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
