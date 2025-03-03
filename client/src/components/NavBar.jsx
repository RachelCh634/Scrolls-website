import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ContactUs from './ContactUs';
import { Bold } from 'lucide-react';
export default function NavBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const [openContact, setOpenContact] = useState(false);
  const isLoggedIn = Boolean(user);
 
  const buttonStyles = {
    color: theme.palette.primary.main,
    fontFamily: 'Rubik, sans-serif',
    fontSize: {
      xs: '0.8rem',
      sm: '0.9rem',
      md: '1rem',
    },
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: 'transparent',
      borderBottom: `2px solid ${theme.palette.primary.main}`
    }
  };

  return (
    <>
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Toolbar>
        <AccountMenu isLoggedIn={isLoggedIn} />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.4, sm: 3, md: 3 } }}>
          <Button sx={buttonStyles} onClick={() => setOpenContact(true)}>
            צור קשר
          </Button>
          <Button sx={buttonStyles} component={Link} to="/about">
            אודות
          </Button>
          <Button sx={buttonStyles} component={Link} to="/products">
            מגילות
          </Button>
          <Button sx={buttonStyles} component={Link} to="/">
            בית
          </Button>
          <Typography
            variant="h6"
            sx={{
              color: '#1C1C1C',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 550,
              fontSize: {
                xs: '0.8rem',
                sm: '1rem',
                md: '1.25rem',
              },
              textAlign: 'center',
              width: '100%',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.2
            }}
          >
           לוח המגילות והסת"ם
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    <ContactUs open={openContact} onClose={() => setOpenContact(false)} />
</>
  );
}
