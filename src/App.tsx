import React from "react";
import ReactDOM  from "react-dom";
import Header from './components/Header';
import Generic from './components/Generic';
import MyBkashSlide from "./components/MyBkashSlide";
import Mstyles from "./components/Mstyles";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from './theme';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

// function Home() {
//     return <>
//         <Generic />
//     </>
// }

// function sliderHome() {
//     return <>
//         <MyBkashSlide />
//     </>
// }
// function myStyles() {
//     return <>
//         <Mstyles />
//     </>
// }

function App() {
    return (<>
       <ThemeProvider theme= { defaultTheme }>
           <CssBaseline />
           <Container sx={{ m: 0, p: 0 }}>

            <Header />
            <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
                    <h1>I am heading 1</h1>
                    <h2>I am heading 2</h2>
            <Router>
            <div>
                <Link to="/generic">Home</Link>
                <Link to="/slider">Slider</Link>
                <Link to="/mystyle">Style</Link>
            </div>
                <Routes>
                    <Route path="/generic" element={<Generic />} />
                    <Route path="/slider" element={<MyBkashSlide />} />
                    <Route path="/mystyle" element={<Mstyles />} />

                </Routes>
            </Router>
            
            
            
            <Grid container>
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
                    
                </Grid>
            </Grid>
           </Container>
       </ThemeProvider>
    </>)
}

ReactDOM.render(<App />, document.getElementById("app"));