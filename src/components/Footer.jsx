import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const Footer = () => {
  return (
    <footer>
      <Box backgroundColor={'#E5E5E5'} className='footer'>
        <Box textAlign={'center'} pt={6}>
          <img src="assets/food-truck.png" alt="" />
        </Box>

        <Container>
          <Typography component={'h2'} sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '35px',
            letterSpacing: '0.03em',
            textAlign: 'left',
            color: '#0E2368'

          }}>
            Contact Us
          </Typography>
          <Typography component={'h4'} sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '12px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
          }}>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
          </Typography>
          <Typography component={'h4'} sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '29px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
          }}>
            example2020@gmail.com
          </Typography>
          <Typography component={'h4'} sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '29px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
          }}>
            (904) 443-0343
          </Typography>

          <Typography sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '35px',
            letterSpacing: '0.03em',
            textAlign: 'left',
            color: '#0E2368'
          }} component={'h2'}>
            More
          </Typography>

          <ListItem sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
            paddingLeft: 0,
            paddingRight: 0
          }}>About Us</ListItem>
          <ListItem sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
            paddingLeft: 0,
            paddingRight: 0
          }}>Products</ListItem>
          <ListItem sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
            paddingLeft: 0,
            paddingRight: 0
          }}>Career</ListItem>
          <ListItem sx={{
            fontFamily: 'Source Sans Pro',
            fontSize: '9px',
            fontWeight: 400,
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#646874',
            paddingLeft: 0,
            paddingRight: 0
          }}>Contact Us</ListItem>

        </Container>
        <Box sx={{
          color: '#828B9C',
          fontFamily: 'Roboto',
          fontSize: '9px',
          fontWeight: 400,
          lineHeight: '32px',
          letterSpacing: '0em',
          textAlign: 'center',

        }}>© 2022 Food Truck Example</Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px'
        }}>
          <img src="assets/icon-3.png" alt="" className='footIcon' />
          <img src="assets/icon-2.png" alt="" className='footIcon' />
          <img src="assets/icon-1.png" alt="" className='footIcon' />
        </Box>
      </Box>

    </footer>
  )
}

export default Footer