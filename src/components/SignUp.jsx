import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        FoodTastic
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const addressData = {
      street: formData.get("address.street"),
      city: formData.get("address.city"),
      postal_code: formData.get("address.postal_code"),
      country: formData.get("address.country"),
    };
    const isAdmin = formData.has("is_admin");

    const userData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone_number: formData.get("phone_number"),
      address: addressData,
      is_admin: isAdmin, // Convert the checkbox value to a boolean
    };

    try {
      const response = await fetch("http://localhost:5010/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="lastname"
                  required
                  fullWidth
                  id="lastname"
                  label="last name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="street-address"
                  name="address.street"
                  required
                  fullWidth
                  id="street"
                  label="Street Address"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="address-level2"
                  name="address.city"
                  required
                  fullWidth
                  id="city"
                  label="City"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="postal-code"
                  name="address.postal_code"
                  required
                  fullWidth
                  id="postal_code"
                  label="Postal Code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="country"
                  name="address.country"
                  required
                  fullWidth
                  id="country"
                  label="Country"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone Number"
                  name="phone_number"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="id_admin"
                      name="is_admin"
                      color="primary"
                    />
                  }
                  label="check if you want to register as admin"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/login" variant="body2">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
