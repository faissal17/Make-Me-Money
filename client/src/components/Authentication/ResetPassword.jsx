import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { resetPassword } from '../../Api/auth.api';
import '../../style/auth.css';

import Swal from 'sweetalert2';

function ResetPassword() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [password, setPassword] = useState('');
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    onSubmit: async (values) => {
      try {
        await resetPassword(values.password, token);
        Swal.fire({
          title: 'Success!',
          text: 'password updated successful',
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
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
  });

  useEffect(() => {
    let token = new URLSearchParams(location.search).get('token');
    setToken(token);
  }, [location]);

  return (
    <div className="wrapper">
      <form onSubmit={formik.handleSubmit}>
        <h1>Update Password</h1>
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
          <Link className="a mt-2" to="/Register">
            Register
          </Link>
        </div>
        <button type="submit" className="btn">
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
