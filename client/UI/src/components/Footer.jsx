import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import twitterIcon from '../assets/image/twitter.png'
import youtubeIcon from '../assets/image/youtube.png'
import telegramIcon from '../assets/image/telegram.png'
import instagramIcon from '../assets/image/instagram.png'


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(68, 68, 68)',
        height: '25vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '16px', 
      }}
    >
      <Typography variant="h6" color="white" fontWeight="500">
        Follow Us
      </Typography>
      <Stack direction="row" spacing={2} my={2} justifyContent="center">
        <a href="https://x.com/?lang=en">
          <img
            src={twitterIcon}
            alt="twitter"
            style={{
              height: '32px',
              background: 'white',
              borderRadius: '50%',
              padding: '4px',
            }}
          />
        </a>
        <a href="https://telegram.org/">
          <img
            src={telegramIcon}
            alt="telegram"
            style={{
              height: '32px',
              background: 'white',
              borderRadius: '50%',
              padding: '4px',
            }}
          />
        </a>
        <a href="https://www.youtube.com/">
          <img
            src={youtubeIcon}
            alt="youtube"
            style={{
              height: '32px',
              background: 'white',
              borderRadius: '50%',
              padding: '4px',
            }}
          />
        </a>
        <a href="https://www.instagram.com/">
          <img
            src={instagramIcon}
            alt="instagram"
            style={{
              height: '32px',
              background: 'white',
              borderRadius: '50%',
              padding: '4px',
            }}
          />
        </a>
      </Stack>
      <Box sx={{ width: '100%', borderTop: '1px solid gray', marginTop: '16px' }} />
      <Typography sx={{color : '#B2C9AD'}} >@2024 copyright : AyushSingh</Typography>
    </Box>
  );
};

export default Footer;
