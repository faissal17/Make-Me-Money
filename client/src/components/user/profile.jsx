import React, { useState } from 'react';
import ProfileInfo from '../../shared/global/ProfileInfo';
import Post from '../../shared/ExperienceShared/Post';
import Probleme from '../../shared/problemeShared/Probleme';
import Project from '../../shared/ProjectShared/Project';

function Profile() {
  const [isExperiences, setIsExperiences] = useState(true);
  const [isProblems, setIsProblems] = useState(false);
  const [isProjects, setIsProjects] = useState(false);

  const toggleExperiences = () => {
    setIsExperiences(true);
    setIsProblems(false);
    setIsProjects(false);
  };

  const toggleProblems = () => {
    setIsExperiences(false);
    setIsProblems(true);
    setIsProjects(false);
  };

  const toggleProjects = () => {
    setIsExperiences(false);
    setIsProblems(false);
    setIsProjects(true);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center">
        <ProfileInfo />
      </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="flex justify-center mb-4">
          <button
            className={`mr-4 px-4 py-2 rounded ${
              isExperiences ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={toggleExperiences}
          >
            My Experiences
          </button>

          <button
            className={`mr-4 px-4 py-2 rounded ${
              isProblems ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={toggleProblems}
          >
            My Problems
          </button>

          <button
            className={`px-4 py-2 rounded ${
              isProjects ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={toggleProjects}
          >
            My Projects
          </button>
        </div>

        {isExperiences && <Post button={true} create={true} />}
        {isProblems && <Probleme button={true} create={true} />}
        {isProjects && <Project create={true} />}
      </div>
    </React.Fragment>
  );
}

export default Profile;
