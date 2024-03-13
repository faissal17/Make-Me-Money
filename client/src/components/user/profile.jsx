import React from 'react';
import ProfileInfo from '../../shared/ExperienceShared/ProfileInfo';

function profile() {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center">
        <ProfileInfo />
      </div>
      <div className="flex items-center justify-around">
        <button className="p-3 bg-purple-500 rounded-lg hover:bg-purple-800 text-white text-lg font-bold">
          My Experiences
        </button>
        <button className="p-3 bg-purple-500 rounded-lg hover:bg-purple-800 text-white text-lg font-bold">
          My Problemes
        </button>
        <button className="p-3 bg-purple-500 rounded-lg hover:bg-purple-800 text-white text-lg font-bold">
          My Projects
        </button>
      </div>
    </React.Fragment>
  );
}

export default profile;
