import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


export default function() {
    return <>
    <Grid container>
        <Box sx={{ flexGrow: 1 }}>
            <Paper elevation={2} sx={{ p: 0, m: 1 }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="span" variant="body2">
                            My bKash
                        </Typography>

                        <Divider />  
                    </Grid>
                </Grid>
                <Stack 
                    direction="row" 
                    sx={{ 
                        overflow: 'auto', 
                        display: '-webkit-box'
                        }}
                    spacing={2}
                        
                    >
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <PhoneIphoneIcon color="success" fontSize="large" />
                            </Box>
                            <Typography component="span" variant="body2">
                                Mobile Recharge
                            </Typography>
                        </Box>
                    
                        
                    
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <PhoneIphoneIcon color="success" fontSize="large" />
                            </Box>
                            <Typography component="span" variant="body2">
                                Mobile Recharge
                            </Typography>
                        </Box>
                </Stack>   
                
            </Paper>
        </Box>
        
    </Grid> 
    </>
}