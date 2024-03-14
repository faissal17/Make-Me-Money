import React, { useState, useEffect } from 'react';
import ProfileInfo from '../../shared/ExperienceShared/ProfileInfo';
import { useParams } from 'react-router-dom';
import { getUserExperiences } from '../../Api/Experience.api';
import ExpPopUp from '../../shared/ExperienceShared/ExpPopUp';

function profile() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUserExperiences(id)
      .then((response) => {
        setPosts(response);
        console.log('Experience data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="flex justify-center items-center">
        <ProfileInfo />
      </div>
      <div className="flex justify-center items-center">
        <ExpPopUp />
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
