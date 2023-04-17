import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const AboutUs = () => {
  return (
    <section>
      <Box backgroundColor={'#F0F1F7'} textAlign={'center'} mt={5} pb={5}>
        <Typography pt={20} sx={{
          fontFamily: 'Poppins',
          fontSize: 26,
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: 0,
          textAlign: 'center',
          color: '#0E2368'
        }}>
          About Us
        </Typography>

        <Typography sx={{
          fontFamily: 'Open Sans',
          fontSize: 11,
          fontWeight: 400,
          lineHeight: 1.8,
          letterSpacing: 0,
          textAlign: 'center',
          color: '#444957'
        }} mx={8} my={4}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          t has survived not only five centuries.
        </Typography>

        <Button variant="contained" sx={{
          height: 25,
          borderRadius: 27,
          width: 96,
          background: '#E23744',
          color: '#ffffff',
          fontFamily: 'Source Sans Pro',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 0.01,
          textTransform: 'none'

        }}> Read More </Button>



      </Box>
    </section>
  )
}

export default AboutUs