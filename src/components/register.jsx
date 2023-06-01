import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Check if any of the fields are empty
    if (
      !data.get('email') ||
      !data.get('password') ||
      !data.get('firstname') ||
      !data.get('lastname')
    ) {
      alert('Please fill in all the fields');
      return;
    }

    const jsonData = {
      email: data.get('email'),
      password: data.get('password'),
      fname: data.get('firstname'),
      lname: data.get('lastname'),
    };

    fetch('https://fragile-boa-kilt.cyclic.app/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          alert('Registration successful');
          window.location = '/login';
        } else {
          alert('Registration failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh',width:'176vh'  }}>
        <CssBaseline />
        <Grid
         className="background_sign"
          item
          xs={false}
          sm={4}
          md={7}>
              <img
      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4irh08q2bvq-934%3A235?alt=media&token=f9803599-02ce-4499-80d9-f2535fca51c0"
      alt="Not Found"
      className="logo_sign"
    />
      </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
            Sign in to your account to continue with
            </Typography>
            <Box component="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="firstname"
                label="FirstName"
                type="text"
                id="firstname"
                autoComplete="firstName"
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="LastName"
                type="text"
                id="lastname"
                autoComplete="lastName"
                />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
               
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {""}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}