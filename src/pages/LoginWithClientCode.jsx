import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginWithClientCode() {
      const navigate = useNavigate()

      const handleSubmit = (event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            // console.log({
            //       email: data.get("ClientCode"),
            //       password: data.get("password"),
            // });

            let dataNew = JSON.stringify({
                  clientcode: data.get("ClientCode"),
                  password: data.get("password"),
            });

            let config = {
                  method: 'post',
                  maxBodyLength: Infinity,
                  url: 'http://localhost:3000/api/smart-api-login',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  data: dataNew
            };

            axios.request(config)
                  .then((response) => {
                        console.log(JSON.stringify(response.data.data.jwtToken));
                        localStorage.setItem("user_jwt_token", JSON.stringify(response.data.data.jwtToken))
                        localStorage.setItem("user_detail", JSON.stringify(data.get("ClientCode")))
                        navigate("/")
                  })
                  .catch((error) => {
                        console.log(error);
                  });

      };

      return (
            <Container component="main" maxWidth="xs">
                  <Box
                        sx={{
                              marginTop: 8,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                        }}
                  >
                        <Typography component="h1" variant="h5">
                              Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                              <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="ClientCode"
                                    name="ClientCode"
                                    autoComplete="text"
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
                                    Sign In
                              </Button>
                              <Grid container>
                                    <Grid item xs>
                                          <Link href="#" variant="body2">
                                                Forgot password?
                                          </Link>
                                    </Grid>
                                    <Grid item>
                                          <Link href="#" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                          </Link>
                                    </Grid>
                              </Grid>
                        </Box>
                  </Box>
            </Container>
      );
}