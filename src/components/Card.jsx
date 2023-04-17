import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Card = ({data}) => {
    const {img, title,txt} = data
  return (
    <article>
        <Box sx={{
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
        }}>
            <Box sx={{
            width : 271,
            borderRadius : 10,
            border : '0.88px solid #373737',
        }}textAlign={'center'} mt={6}>
            <img src={img} alt="Tomatoes" className='article-img'/>
            <Typography variant = {'h2'} components = {'h2'}sx={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '35px',
                letterSpacing:'0.05em',
                color : '#0E2368'                
            }} >
                {title}
            </Typography>

            <Typography variant = {'h2'} components = {'h2'} sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '22px',
                letterSpacing: '-0.01em',
                textAlign: 'left',
                
            }} m={4}>
                {txt}
            </Typography>

            <Button sx={{
               fontFamily: 'Source Sans Pro',
               fontSize: '11px',
               fontWeight: '600',
               lineHeight: '11px',
               letterSpacing: '0.03em',
               textTransform : 'none',
                border : '0.8px solid #373737',
                borderRadius : '10px',
                margin : '33px'
            }}>
                Read More
            </Button>
        </Box>
        </Box>
        
    </article>
  )
}

export default Card