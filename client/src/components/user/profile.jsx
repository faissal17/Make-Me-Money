import React, { useState, useEffect } from 'react';
import ProfileInfo from '../../shared/ExperienceShared/ProfileInfo';
import { useParams } from 'react-router-dom';
import { getUserProbleme } from '../../Api/probleme.api';
import { getUserExperiences } from '../../Api/Experience.api';
import Post from '../../shared/ExperienceShared/Post';
import Probleme from '../../shared/problemeShared/probleme';
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
            Experiences
          </button>

          <button
            className={`px-4 py-2 rounded ${
              isExperiences ? 'bg-gray-300' : 'bg-blue-500 text-white'
            }`}
            onClick={toggleView}
          >
            Problems
          </button>
        </div>
        {isExperiences ? (
          <Post button={true} create={true} />
        ) : (
          <Probleme button={true} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Profile;
