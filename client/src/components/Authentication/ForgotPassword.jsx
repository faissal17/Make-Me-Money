import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { forgetPassword } from '../../Api/auth.api';
import Swal from 'sweetalert2';
import '../../style/auth.css';

function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      try {
        await forgetPassword(values.email);
        Swal.fire({
          text: 'Please check your email',
          icon: 'question',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'No User found with this email',
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
      }
      return errors;
    },
  });
  return (
    <div className="wrapper">
      <form onSubmit={formik.handleSubmit}>
        <h1>Reset Password</h1>
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
        <div className="remeber-forget">
          <Link className="a mt-2" to="/Register">
            Register
          </Link>
        </div>
        <button type="submit" className="btn">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
