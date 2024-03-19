import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExpById } from '../../Api/Experience.api';

function ArticleInfo() {
  const { id } = useParams();
  console.log(id);
  const [experience, setExperience] = useState(null);

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
      {experience && (
        <div>
          <div
            className="bg-cover h-64 text-center overflow-hidden"
            style={{
              height: '450px',
              backgroundImage: `url('${experience.image}')`,
            }}
          ></div>
          <div className="max-w-2xl mx-auto">
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div>
                <h1 className="text-gray-900 font-bold text-3xl mb-2">
                  {experience.name}
                </h1>
                <p className="text-base leading-8 my-5">
                  <strong>Description:</strong> {experience.description}
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
                  <strong>Earning:</strong> {experience.earning}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleInfo;
