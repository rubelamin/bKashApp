import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Divider from '@mui/material/Divider';


export default function Limits() {

    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return <>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography>
                    Limits
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                            <TabList onChange={handleChange}>
                                <Tab value="1" label="Daily" sx={{ textTransform: 'capitalize' }} />
                                <Tab value="2" label="Monthly" sx={{ textTransform: 'capitalize' }} />

                            </TabList>
                        </Box>
                        
                        <TabPanel value="1">
                            <Grid container>
                                <Grid item xs={6}>Mobile Recharge</Grid>
                                <Grid item xs={6}>Tk. 1550</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />

                                <Grid item xs={6}>Send Money</Grid>
                                <Grid item xs={6}>Tk. 25000</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />

                                <Grid item xs={6}>Cash Out</Grid>
                                <Grid item xs={6}>Tk. 25000</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />
                                
                                <Grid item xs={6}>Cash In</Grid>
                                <Grid item xs={6}>Tk. 25000</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="2">
                        <Grid container>
                                <Grid item xs={6}>Mobile Recharge</Grid>
                                <Grid item xs={6}>Tk. 11550</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />

                                <Grid item xs={6}>Send Money</Grid>
                                <Grid item xs={6}>Tk. 225000</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />

                                <Grid item xs={6}>Cash Out</Grid>
                                <Grid item xs={6}>Tk. 225000</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />
                                
                                <Grid item xs={6}>Cash In</Grid>
                                <Grid item xs={6}>Tk. 225000</Grid>

                                <Divider sx={{ width: '100%', my: 1 }} />
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Grid>
            
        </Grid>

    </>
}