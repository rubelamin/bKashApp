import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';

import Drawer from './Drawer';


export default function bkashAppBar() {

  const [selected, setSelected] = useState(true);

  const switchControler = <Switch 
                            onChange={event => setSelected(event.target.checked) } 
                            color="primary" 
                            checked={selected} 
                          />

  const balanceText = <Chip 
        icon={<CurrencyLiraIcon />}
        label="Tap For Balance"
        color="primary"
        sx={{ 
          bgcolor: 'background.default'
        }}  
        variant="outlined" />;
  const balanceBDT = <Chip 
        icon={<CurrencyLiraIcon />}
        label="5000 BDT"
        color="primary"
        sx={{ 
          bgcolor: 'background.default'
        }} 
        variant="outlined" />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: 'primary', py: '10px' }}>
        <Toolbar sx={{ px: '5px' }}>
          <Stack direction="row" spacing={2}>
            <Avatar 
              alt="Profile" 
              src="https://mui.com/static/images/avatar/2.jpg"
              sx={{ width: 54, height: 54 }}
            />
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" spacing={2} sx={{ pl: '16px', mt: '8px' }}>
              <Typography
                variant="body1"
                color="inherit"
                noWrap
                component="div"
                sx={{ display: { xs: 'block', sm: 'block', } }}
              >
                User Name
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 0 }}>
              <FormControlLabel
                value={selected ? balanceText : balanceBDT }
                control={switchControler}
                label={selected ? balanceText : balanceBDT }
                labelPlacement={selected ? "start" : "start"}
              />
            </Stack>
          </Stack>
          
          
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <EmojiEventsIcon />
              </Badge>
            </IconButton>
            <Drawer />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
