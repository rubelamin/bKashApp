import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Transdetails from './props/Transactions';




export default function Statements() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    

    return <>
        
        
            <Box sx={{ width:'100%', typography: 'body2'}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="Transaction History">
                            <Tab label="Transaction History" value="1" sx={{
                                typography: 'body1',
                                textTransform: 'capitalize'
                            }} />
                            <Tab label="Transaction Summery" value="2" sx={{
                                typography: 'body1',
                                textTransform: 'capitalize'
                            }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ px: '6px' }}>
                        
                        <Transdetails 
                            cashtype="Cash In" 
                            usernumber="01611776699"
                            transID="7GHG5665GTIUYn"
                            time="10.34am 28/01/22"
                            amount="Tk. 1530"
                        />
                        
                        
                        <Transdetails 
                            cashtype="Send Money" 
                            usernumber="01611776699"
                            transID="7GHG5665GTIUYn"
                            time="2.12pm 27/1/22"
                            amount="Tk. 5000"
                        />
                        
                        
                        <Transdetails 
                            cashtype="Cash Out" 
                            usernumber="01611776699"
                            transID="7GHG5665GTIUYn"
                            time="10.30am 27/1/22"
                            amount="Tk. 2000"
                        />
                        
                        
                        
                        <Transdetails 
                            cashtype="Received Money" 
                            usernumber="01611776699"
                            transID="7GHG5665GTIUYn"
                            time="5.34pm 26/1/22"
                            amount="Tk. 3000"
                        />
                        
                        
                        
                        <Transdetails 
                            cashtype="Mobile Recharge" 
                            usernumber="01611776699"
                            transID="7GHG5665GTIUYn"
                            time="9.14pm 25/1/22"
                            amount="Tk. 30"
                        />
                       

                        
                        <Transdetails 
                            cashtype="Mobile Recharge" 
                            usernumber="01611776699"
                            transID="7GHG5665GTIUYn"
                            time="7.30am 25/1/22"
                            amount="Tk. 150"
                        />
                        
                    
                    </TabPanel>

                    <TabPanel value="2">Transaction Summery</TabPanel>
                    
                </TabContext>
            </Box>
        
        

    </>
}