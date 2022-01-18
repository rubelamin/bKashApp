import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Badge from '@mui/material/Badge';
import { purple, blueGrey, red, pink } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    sendMoney: {
        color: '#ff5252',
        fontSize: '2.1875rem',
    },
    recharge: {
        color: '#009688',
        fontSize: '2.1875rem',
    },
    cashOut: {
        color: '#0097a7',
        fontSize: '2.1875rem',
    },
    makePayment: {
        color: '#f57f17',
        fontSize: '2.1875rem',
    },
    addMoney: {
        color: purple[700],
        fontSize: '2.1875rem',
    },
    payBill: {
        color: blueGrey[400],
        fontSize: '2.1875rem',
    },
    getLoan: {
        color: red[300],
        fontSize: '2.1875rem',
    },
    seeMore: {
        color: pink[500],
        fontSize: '2.1875rem',
    },
}));

 export default function HomePagebKash() {

    const classes = useStyles();

     return <>
     <Grid container sx={{ mt: 12,  }}>
        <Box sx={{ flexGrow: 1 }} textAlign="center" mb={1}>
            <Paper>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <CurrencyExchangeIcon className={classes.sendMoney}  />
                            </Box>
                            <Typography component="span" variant="body2">
                                Send Money
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <PhoneIphoneIcon className={classes.recharge} />
                            </Box>
                            <Typography component="span" variant="body2">
                                Mobile Recharge
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <CleanHandsIcon className={classes.cashOut} />
                            </Box>
                            <Typography component="span" variant="body2">
                                Cash Out
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <ShoppingBagIcon className={classes.makePayment} />
                            </Box>
                            <Typography component="span" variant="body2">
                                Make Payment
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ minHeight: 20 }} />
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <Badge color="primary" variant="dot">
                                    <VideogameAssetIcon className={classes.addMoney} />
                                </Badge>
                            </Box>
                            <Typography component="span" variant="body2">
                                Add Money
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center" sx={{ height: 35 }}>
                                <EmojiObjectsIcon className={classes.payBill} />
                            </Box>
                            <Typography component="span" variant="body2">
                                Pay Bil
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <Badge color="primary" variant="dot">
                                    <VolunteerActivismIcon className={classes.getLoan} />
                                </Badge>
                            </Box>
                            <Typography component="span" variant="body2">
                                Loan
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box alignContent="center">
                            <Box textAlign="center">
                                <Badge color="primary" variant="dot">
                                    <DashboardCustomizeIcon className={classes.seeMore} />
                                </Badge>
                            </Box>
                            <Typography component="span" variant="body2">
                                More
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
     </Grid>
     </>
 }