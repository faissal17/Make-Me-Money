import React, { useState, useEffect } from 'react';
import image from '../../assets/images/img.jpg';
import { getCurrentUser } from '../../Api/user.api';

function ProfileInfo() {
  const [user, setUser] = useState([]);

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
  return (
    <div className="flex flex-wrap items-center justify-center sm:w-full md:w-1/2 lg:w-1/3 p-16">
      <div className="container bg-white shadow-lg transform duration-200 easy-in-out">
        <div className="flex justify-center px-5 -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full"
            src={user.image}
            alt="Profile"
          />
        </div>
        <div className="">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-400 mt-2 hover:text-blue-500">
              {user.email}
            </p>
          </div>
          <hr className="mt-6" />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
