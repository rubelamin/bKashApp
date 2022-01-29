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

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
  
  
  import Statements from './components/Statements';
  import Limits from './components/Limits';
  import Coupons from './components/Coupons';
  import RefferApp from './components/RefferApp';
  import BkashMap from './components/BkashMap';
  import DiscoverbKash from './components/DiscoverbKash';
  import Settings from './components/Settings';
  import Support from './components/Support';


  

function App() {
    
    return (<>
       <ThemeProvider theme= { defaultTheme }>
           <CssBaseline />
           <Container sx={{ m: 0, p: 0 }}>
           <Router>
            <Header />
            
            <Grid container sx={{ mt: 12,  }}></Grid>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/Home" />}/>
                        
                    <Route path="/Home" element={<Generic />} />
                    <Route path="/Statements" element={<Statements />} />
                    <Route path="/Limits" element={<Limits />} />
                    <Route path="/Coupons" element={<Coupons />} />
                    <Route path="/ReferbKashApp" element={<RefferApp />} />
                    <Route path="/bKashMap" element={<BkashMap />} />
                    <Route path="/DiscoverbKash" element={<DiscoverbKash />} />
                    <Route path="/Settings" element={<Settings />} />
                    <Route path="/Support" element={<Support />} />

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
                    
                </Grid>
            </Grid>
           </Container>
       </ThemeProvider>
    </>)
}

ReactDOM.render(<App />, document.getElementById("app"));