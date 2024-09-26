/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

//import '../App.css'; // Ensure this path is correct


const Login: React.FC = () => {
  const router = useRouter();

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);

      // Redirect to home page on successful login
      router.push('/home');
    },
  });

  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Log in</h2>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          className="submit-btn"
        >
          Log In
        </Button>

        <p className="link">
          Don't have an account? <a href="/Register">Sign Up</a>
        </p>

        <div className="divider">or</div>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />}
          className="google-btn"
          onClick={() => signIn('google')}
        >
          Log in with Google
        </Button>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook logo" />}
          className="facebook-btn"
          onClick={() => signIn('facebook')}
        >
          Log in with Facebook
        </Button>
      </form>
    </div>
  );
};

export default Login;
