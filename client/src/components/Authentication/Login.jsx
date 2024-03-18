import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { login } from '../../Api/auth.api';
import '../../style/auth.css';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        Swal.fire({
          title: 'Success!',
          text: 'Login successful',
          icon: 'success',
        }).then(() => {
          navigate('/Experience');
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Email or password are wrong',
          icon: 'error',
        });
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email form';
      } else if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
  });
  return (
    <div className="wrapper">
      <form onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 flex justify-center items-center text-lg font-semibold">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 flex justify-center items-center text-lg font-semibold">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="remeber-forget">
          <Link className="a" to="/ForgetPassword">
            Forget Password
          </Link>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't you have an account?
            <Link className="a mt-2" to="/Register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
