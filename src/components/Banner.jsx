import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function BasicGrid() {
  return (
    <Box className = 'banner'>
      <Grid container spacing={2} className = 'banner-item-1'>
        <Grid xs={12} sm={6} >
          <Box height={400}>
            <img src="assets/banner.png" alt="" />
            <Box sx={{
              position: 'relative',
              bottom: 419,
              left: 2
            }}>
              <img src="assets/red-element.png" alt="" />
            </Box>
          </Box>

        </Grid>
        <Grid xs={12} sm={6}>
          <Box textAlign={'center'} mt={4}>
            <Typography variant='h1' component='h1' sx={{
              fontFamily: 'Source Sans Pro',
              fontSize: 38,
              fontWeight: 700,
              lineHeight: 1.4,
              textAlign: 'center',
              color: '#0E2368'
            }} mx={8}>
              Discover the <Box color={'#E23744'} component='span'>Best</Box> Food and Drinks
            </Typography>

            <Typography sx={{
              fontFamily: 'Open Sans',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: 0,
              textAlign: 'center',
              color: '#444957'
            }} mx={8} my={4}>
              Naturally made Healthcare Products for the better care & support of your body.
            </Typography>

            <Button variant="contained" sx={{
              height: 40,
              borderRadius: 30,
              background: '#E23744',
              color: '#ffffff',
              fontFamily: 'Open Sans',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.01,
              textTransform : 'none'
            }}> Explore Now! </Button>
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
}