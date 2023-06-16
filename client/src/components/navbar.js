import React from 'react';
import { Box, Link, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './logo1.png';

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = JSON.parse(localStorage.getItem('authToken'));

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/api/v1/auth/logout');
      localStorage.removeItem('authToken');
      toast.success('Logout successfully');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      width="100%"
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      sx={{ boxShadow: 3, mb: 2 }}
      minHeight="64px"
    >
      <Box sx={{ margin: '0 auto' }}>
      

        {/*<Link href="/homepage" underline="none">*/}
          <Typography variant="h1" color={'#f5f5f5'} fontWeight="bold" style={{ fontFamily: 'Space Grotesk' , marginRight:'-25px'}}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px',filter: 'brightness(0.96) invert(0.97)' }} />
            MyGPT
          </Typography>
      </Box>

      {location.pathname === '/login' || location.pathname === '/register'? (
        <>
          <Link href="/login" underline="none" p={1}>
            <Typography
              component="span"
              variant="body1"
              color="primary"
              fontWeight="bold"
              p={1}
              sx={{ border: '2px solid', borderRadius: '30px', padding: '8px 16px', marginRight: '10px' , marginLeft:'-50px'}}
            >
              Login
            </Typography>
          </Link>

          <Link href="/register" underline="none">
            <Typography
              component="span"
              variant="body1"
              color="primary"
              fontWeight="bold"
              p={1}
              sx={{ border: '2px solid', borderRadius: '30px', padding: '8px 16px', marginRight: '-10px' }}
            >
              Sign Up
            </Typography>
          </Link>
        </>
      ) : (
        <Link href="/" underline="none" onClick={handleLogout}>
          <Typography
            component="span"
            variant="body1"
            color="primary"
            fontWeight="bold"
            p={1}
            sx={{ border: '2px solid', borderRadius: '30px', padding: '8px 16px', marginRight: '-50px' }}
          >
            Logout
          </Typography>
        </Link>
      )}
    </Box>
  );
};

export default Navbar;

