import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { register } from '../../Api/auth.api';
import '../../style/auth.css';
import Swal from 'sweetalert2';
function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await register(values.name, values.email, values.password);
        Swal.fire({
          title: 'Success!',
          text: 'Register successful',
          icon: 'success',
        }).then(() => {
          navigate('/Login');
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'something went wrong',
          icon: 'error',
        });
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Name is required';
      }
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
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 flex justify-center items-center text-lg font-semibold">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
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
          <Link className="a" to="">
            Forget Password
          </Link>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="register-link">
          <p>
            Do you have an account?
            <Link className="a" to="/Login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
