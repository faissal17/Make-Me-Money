import ExperienceNavbar from '../../shared/global/ExperienceNavbar';
import React, { useEffect, useState } from 'react';
import { getAllExp } from '../../Api/Experience.api';
import ProfileInfo from '../../shared/global/ProfileInfo';
import MyInfo from '../../shared/global/MyInfo';
function ExperienceHome() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getAllExp()
      .then((response) => {
        setExperiences(response);
        console.log('Experience data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <React.Fragment>
      <ExperienceNavbar />
      <div className="absolute top-20 w-full">
        <ProfileInfo />
      </div>
      <div className="justify-center items-center">
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          {experiences.map((experience) => (
            <div
              key={experience._id}
              className="rounded-2xl overflow-hidden flex flex-col max-w-xl mx-auto"
            >
              <a href="#">
                <img
                  className="w-full h-96 object-cover"
                  src={experience.image}
                  alt="Sunset in the mountains"
                />
              </a>
              <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10 rounded-2xl">
                <a
                  href="#"
                  className="font-semibold text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  {experience.name}
                </a>
                <p className="text-gray-500 text-sm truncate">
                  {experience.description}
                </p>
                <p className="mt-5 text-gray-600 text-xs">
                  Created By
                  <a
                    href="#"
                    className="text-xs text-indigo-600 transition duration-500 ease-in-out ml-1"
                  >
                    {experience.user.name}
                  </a>
                </p>
                <p className="text-gray-600 text-xs">
                  Website
                  <a href={experience.website} className="text-indigo-600 ml-1">
                    {experience.website}
                  </a>
                </p>
                <p className="text-gray-600 text-xs">
                  Earning: {experience.earning}
                </p>
                <p className="text-gray-600 text-xs">
                  Location: {experience.location}
                </p>
                <p className="text-gray-600 text-xs">
                  Feedback: {experience.feedback}
                </p>
                <p className="text-gray-600 text-xs">
                  Status: {experience.status}
                </p>
                <p className="text-gray-600 text-xs">
                  {experience.tags.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ExperienceHome;
