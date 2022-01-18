import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const themeInstance = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontSize: 8,
    primary: 'blue',
    secondary: 'pink',
};

const useStyles = makeStyles((theme: typeof themeInstance) => ({
    textBG: {
        background: theme.background,
        border: 0,
        fontSize: (theme.fontSize) * 2,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: theme.primary,
        height: 48,
        padding: '0 30px',
    },
}));

function ButtonChild() {
    const classes = useStyles();

    return (
        <Button type="button" className={classes.textBG}>
            This is makestyles page
        </Button>
    );
}

export default function() {
    const cls = useStyles();
    return <>
    <Grid container>
        <ThemeProvider theme={themeInstance}>
            <Grid>
                <ButtonChild />
                <Typography className={cls.textBG}>
                    Bangladesh
                </Typography>
            </Grid>
            
        </ThemeProvider>
    </Grid>
    </>
        
    
}
