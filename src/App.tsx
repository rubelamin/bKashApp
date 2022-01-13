import React from "react";
import ReactDOM  from "react-dom";
import Header from './components/Header';
import Generic from './components/Generic';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from './theme';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';



function App() {
    return (<>
       <ThemeProvider theme= { defaultTheme }>
           <CssBaseline />
           <Container sx={{ m: 0, p: 0 }}>
            <Header />
            <Grid sx={{ mt: 8 }}>
                <Grid item xs={12}>
                <Stack spacing={1} alignItems="center">
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" variant="outlined" />
                    </Stack>
                </Stack>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <Generic />
                </Grid>
            </Grid>
           </Container>
       </ThemeProvider>
    </>)
}

ReactDOM.render(<App />, document.getElementById("app"));