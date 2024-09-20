/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
//import PasswordInput from "../components/PasswordInput";

//import '../App1.css'; // Ensure this path is correct

const Register: React.FC = () => {
  const router = useRouter();

  // Yup validation schema
  const validationSchema = Yup.object({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    birthdate: Yup.date().required('Birth date is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      birthdate: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);

      // Redirect to home page on successful registration
      router.push('/home');
    },
  });

  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Sign up</h2>

        <TextField
          fullWidth
          id="firstname"
          name="firstname"
          label="Firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
          margin="normal"
        />

        <TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="Last name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
          margin="normal"
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />

        <TextField
          fullWidth
          id="birthdate"
          name="birthdate"
          label="Birth date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formik.values.birthdate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
          helperText={formik.touched.birthdate && formik.errors.birthdate}
          margin="normal"
        />

        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label="Phone number"
          type="tel"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          margin="normal"
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
        />

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          margin="normal"
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          className="submit-btn"
        >
          Sign Up
        </Button>

        <p className="link">
          Already have an account? <a href="/Login">Log In</a>
        </p>

        <div className="divider">or</div>

        <Button
          variant="outlined"
          fullWidth
          className="google-btn"
          startIcon={<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />}
        >
          Sign up with Google
        </Button>
      </form>
    </div>
  );
};

export default Register;
