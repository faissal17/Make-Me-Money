import React, { useEffect, useState } from 'react';
import { getAllExp } from '../../Api/Experience.api';
import { Link } from 'react-router-dom';
import ExpPopUp from './ExpPopUp';
function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllExp()
      .then((response) => {
        setPosts(response);
        console.log('Experience data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {posts.map((post) => (
        <div
          key={post._id}
          className="rounded-2xl overflow-hidden flex flex-col max-w-xl mx-auto"
        >
          <a href="#">
            <img
              className="w-full h-96 object-cover"
              src={post.image}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 rounded-2xl">
            <a
              href="#"
              className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              {post.name}
            </a>
            <p className="text-gray-500 text-sm">{post.description}</p>
            <p className="mt-5 text-gray-600 text-xs">
              Created By
              <a
                href="#"
                className="text-xs text-indigo-600 transition duration-500 ease-in-out ml-1"
              >
                {post.user.name}
              </a>
            </p>
            <p className="text-gray-600 text-xs">
              Website
              <a href={post.website} className="text-indigo-600 ml-1">
                {post.website}
              </a>
            </p>
            <p className="text-gray-600 text-xs">Earning: {post.earning}</p>
            <p className="text-gray-600 text-xs">Location: {post.location}</p>
            <p className="text-gray-600 text-xs">Feedback: {post.feedback}</p>
            <p className="text-gray-600 text-xs">Status: {post.status}</p>
            <p className="text-gray-600 text-xs">{post.tags.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
