import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showSnackbar } from "../redux/slices/snackbarSlice";
import { signUpService } from "../services/authService";
import { signUpSchema } from "../validations/YupValidation.js";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValue = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));
    //props.resetForm();
    try {
      let obj = {
        email: values.email,
        password: values.password,
      };
      let response = await signUpService(obj);
      console.log(response);
      if (response.status === 200) {
        dispatch(
          showSnackbar({
            message: "User Sign Up  successfully",
            type: "success",
          })
        );
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Signup</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const { name } = props.values;
                return (
                  <Form>
                    <Field
                      as={TextField}
                      label="First Name"
                      type="text"
                      name="firstname"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="firstname" />}
                      error={props.errors.firstname && props.touched.firstname}
                    />
                    <Field
                      as={TextField}
                      label="Last Name"
                      type="text"
                      name="lastname"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="lastname" />}
                      error={props.errors.lastname && props.touched.lastname}
                    />
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
                    <Field
                      as={TextField}
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="confirmPassword" />}
                      error={
                        props.errors.confirmPassword &&
                        props.touched.confirmPassword
                      }
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
                      Already registered? <Link to="/">Login</Link>
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

export default Signup;
