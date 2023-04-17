import React, { useState } from 'react'
import articles from '../utils/articlesUtils'
import Card from './Card'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';




const Articles = () => {
  const [page, setPage] = useState(1)
  const [disable, setDisable] = useState(true)
  return (

    <section>
      <Typography component={'h2'} sx={{
        fontFamily: 'Poppins',
        fontSize: '28px',
        fontWeight: 600,
        lineHeight: '54px',
        letterSpacing: '0.04em',
        textAlign: 'center',
        color: '#0E2368'
      }} mt={6}>
        Latest Articles
      </Typography>
      <Box className='articles'>
        {articles.slice(page - 1, page * 3).map((iter, index) => {
          return <Card data={iter} key={index} />
        })}
      </Box>


      <Box textAlign={'center'} mt={2}>
        <Button disabled={disable}
          onClick={() => {
            setDisable((prev) => !prev)
            setPage(page - 3)
          }
          }
        >
          <img src="assets/page-border.png" alt="" />
          <img src="assets/page-left.png" alt="" className='arrowBtn' />
        </Button>
        {/* //if page is anything other than 1 it will disaplay 2 */}

        {page == 1 ? 1 : 2}/2
        <Button disabled={!disable}
          onClick={() => {
            setDisable((prev) => !prev)
            setPage(page + 3)
          }
          }
        ><img src="assets/page-border.png" alt="" />
          <img src="assets/page-right.png" alt="" className='arrowBtn' />
        </Button>
      </Box>

    </section>
  )
}

export default Articles