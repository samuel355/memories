import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
const App = () =>{
    return (
        <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'></Typography>
                <img src={memories} alt="memories" />
            </AppBar>
        </Container>
    )
}
export default App;