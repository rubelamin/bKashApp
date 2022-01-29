import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';


export default function Transdetails(props: any) {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const [open, setOpen] = React.useState(false);
    const popOpen = () => setOpen(true)
    const popClose = () => setOpen(false)

    return <>
        <Box sx={{ flexGrow: 1, typography: 'body2' }}>
            <Grid container onClick={popOpen}>
                <Grid item xs={8}>
                    <Stack direction="row" spacing={1}>
                        <Stack>
                            <Avatar alt="Icon" src="" />
                        </Stack>
                        <Stack >
                            <Typography sx={{ fontWeight: 500 }}>
                                {props.cashtype}
                            </Typography>
                            <Typography>
                                {props.usernumber}
                            </Typography>
                            <Typography>
                               Trans Id: {props.transID}
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        {props.time}
                    </Typography>
                    <Typography sx={{ color: 'green', fontWeight: 500 }}>
                        {props.amount}
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1, mb: 1 }} />

            <Modal open={open} onClose={popClose} >

                <Box sx={style}>
                    <Divider>
                        <Avatar alt="Icon" src="" />
                    </Divider>
                    <Typography textAlign="center">
                    {props.cashtype}
                    </Typography>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                        </Grid>
                        <Grid item xs={5}>
                            {props.cashtype}
                        </Grid>
                        <Grid item xs={7}>
                            {props.amount}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                        </Grid>
                        <Grid item xs={5}>
                            From
                        </Grid>
                        <Grid item xs={7}>
                            {props.usernumber}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                        </Grid>
                        <Grid item xs={5}>
                            Date :
                        </Grid>
                        <Grid item xs={7}>
                            {props.time}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                        </Grid>
                        <Grid item xs={5}>
                            Trans Id:
                        </Grid>
                        <Grid item xs={7}>
                            {props.transID}
                        </Grid>
                        <Grid item xs={12}>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </Box>
    </>
}
    
