import React, { useState } from 'react';
import ProfileInfo from '../../shared/global/ProfileInfo';
import Post from '../../shared/ExperienceShared/Post';
import Probleme from '../../shared/problemeShared/Probleme';
import Project from '../../shared/ProjectShared/Project';
function Profile() {
  const [isExperiences, setIsExperiences] = useState(true);

  const toggleView = () => {
    setIsExperiences(!isExperiences);
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
            onClick={toggleView}
          >
            My Experiences
          </button>

          <button
            className={`px-4 py-2 rounded ${
              isExperiences ? 'bg-gray-300' : 'bg-blue-500 text-white'
            }`}
            onClick={toggleView}
          >
            My Problems
          </button>
        </div>
        {isExperiences ? (
          <Post button={true} create={true} />
        ) : (
          <Probleme button={true} create={true} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Profile;
