import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/'
const App = () =>{
    return (
        <Container maxwidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'> Memories</Typography>
                <img src={memories} alt="memories" height='60' />
            </AppBar>
        </Container>
    )
}
export default App;