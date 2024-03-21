import React, { useState, useEffect } from 'react';
import { getCurrentUser, updateUser } from '../../Api/user.api';
import Swal from 'sweetalert2';
import '../../style/main.css';
import { useParams } from 'react-router-dom';

function Setting() {
  const { id } = useParams();
  const [user, setUser] = useState({
    _id: id,
    name: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    getCurrentUser()
      .then((response) => {
        setUser(response);
        console.log('user data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUser((prevUser) => ({
      ...prevUser,
      image: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('email', user.email);

      formData.append('bio', user.bio);
      if (user.image) {
        formData.append('image', user.image);
      }

      const response = await updateUser(id, formData);
      console.log(response);

      Swal.fire('Success!', 'Experience has been updated.', 'success');
    } catch (error) {
      console.error('Error updating Experience:', error);
      Swal.fire('Error', 'Failed to update the Experience.', 'error');
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <form
        onSubmit={handleSubmit}
        className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4"
      >
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src={user.image}
                  alt="Bordered avatar"
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <input
                    type="file"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="w-full">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your first name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="Your first name"
                    value={user.name}
                    onChange={handleChange}
                    name="name"
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    placeholder="your.email@mail.com"
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Bio
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Write your bio here..."
                    value={user.bio}
                    onChange={handleChange}
                    name="bio"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Setting;
