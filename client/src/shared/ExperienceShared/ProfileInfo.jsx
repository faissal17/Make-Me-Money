import React from 'react';
import image from '../../assets/images/img.jpg';

function ProfileInfo() {
  return (
    <div className="flex flex-wrap items-center justify-center sm:w-full md:w-1/2 lg:w-1/3 p-14 sticky top-0">
      <div className="container bg-white shadow-lg transform duration-200 easy-in-out">
        <div className="flex justify-center px-5 -mt-12">
          <img className="h-32 w-32 bg-white p-2 rounded-full" src={image} alt="Profile" />
        </div>
        <div className="">
          <div className="text-center px-14">
            <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
            <a
              className="text-gray-400 mt-2 hover:text-blue-500"
              href="https://www.instagram.com/immohitdhiman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @immohitdhiman
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <hr className="mt-6" />
          <div className="flex bg-gray-50 justify-center">
            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
              <button className="text-lg font-bold text-purple-700">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
