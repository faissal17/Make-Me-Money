import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExpById } from '../../Api/Experience.api';
import { addComment } from '../../Api/Comment.api';
function ArticleInfo() {
  const { id } = useParams();
  console.log(id);
  const [experience, setExperience] = useState(null);
  const [comment, setComment] = useState([]);
  const [formData, setFormData] = useState({
    _id: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    addComment(formData, id)
      .then((response) => {
        console.log('comment created successfully:', response);
      })
      .catch((error) => {
        console.error('Error creating comment:', error);
      });
  };

  useEffect(() => {
    getExpById(id)
      .then((response) => {
        if (response.message && typeof response.message === 'object') {
          setExperience(response.message);
          console.log('Experience data:', response.message);
        } else {
          console.error('Invalid response data:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <address className="flex items-center justify-center mb-6 not-italic">
        <div className="inline-flex items-center justify-center mr-3 text-sm text-gray-900">
          <img
            className="mr-4 w-16 h-16 rounded-full"
            src={experience?.user.image}
            alt="Jese Leos"
          />
          <div>
            <a
              href="#"
              rel="author"
              className="text-xl font-bold text-gray-900"
            >
              {experience?.user.name}
            </a>
            <p className="text-base text-gray-500 dark:text-gray-400">
              {experience?.user.email}
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              <time> {experience?.date}</time>
            </p>
          </div>
        </div>
      </address>
      {experience && (
        <div>
          <div
            className="bg-cover h-64 text-center overflow-hidden rounded-3xl"
            style={{
              height: '500px',
              backgroundImage: `url('${experience.image}')`,
            }}
          ></div>
          <div className="max-w-2xl mx-auto">
            <div className="-mt-24 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-10">
              <div>
                <h1 className="text-gray-900 font-bold text-3xl mb-2">
                  {experience.name}
                </h1>
                <p className="text-base leading-8 my-5">
                  {experience.description}
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Website:</strong>{' '}
                  <a
                    href={experience.website}
                    className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                  >
                    {experience.website}
                  </a>
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Earning:</strong> {experience.earning} Per day
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Tags:</strong>{' '}
                  {experience.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-indigo-600 font-medium mr-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Location:</strong> {experience.location}
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Feedback:</strong> {experience.feedback}
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Status:</strong> {experience.status}
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Date:</strong>{' '}
                  {new Date(experience.date).toLocaleDateString()}
                </p>
                <p className="text-base leading-8 my-5">
                  {experience.comments.content}
                </p>
                <hr />
                <h2 className="text-black font-bold text-lg mt-4">
                  Comments Section
                </h2>
                <div>
                  {experience.comments.map((comment, index) => (
                    <div key={index} className="my-6 flex">
                      <img
                        className="w-9 h-9 rounded-full"
                        src={experience.user.image}
                      />
                      <div>
                        <p className="text-base leading-8 ml-3 text-purple-700">
                          {experience.user.name}
                        </p>
                        <p className="text-base leading-8 ml-3 font-semibold">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-6">
                  <textarea
                    className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Add your comment..."
                    required
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md focus:outline-none focus:bg-indigo-700"
                  >
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleInfo;
