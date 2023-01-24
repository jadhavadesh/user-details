import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInService } from "../services/authService";
import { setTokenInLs } from "../util";
import { loginSchema } from "../validations/LoginValidation";
import { useDispatch } from "react-redux";
import { storeLoggedUserDetails } from "../redux/slices/loginSlice";
import { showSnackbar } from "../redux/slices/snackbarSlice";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValue = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, props) => {
    console.log(values);
    try {
      let obj = {
        email: values.email,
        password: values.password,
      };
      let response = await signInService(obj);
      console.log(response);
      if (response.status === 200) {
        setTokenInLs(response.data.token);
        dispatch(storeLoggedUserDetails(values));
        dispatch(
          showSnackbar({
            message: "User Logged In  successfully",
            type: "success",
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      dispatch(
        showSnackbar({
          message: "Something Went Wrong",
          type: "error",
        })
      );
    }
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Signin</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
                return (
                  <Form>
                    <Field
                      as={TextField}
                      label="Email"
                      type="Email"
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="email" />}
                      error={props.errors.email && props.touched.email}
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="password" />}
                      error={props.errors.password && props.touched.password}
                    />

                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                    <Typography mt={2} textAlign={"center"}>
                      Create Account? <Link to="/signup">Sign Up</Link>
                    </Typography>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};

export default Signin;
