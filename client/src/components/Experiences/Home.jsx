import React from 'react';
import ExperienceNavbar from '../../shared/global/ExperienceNavbar';
import Post from '../../shared/ExperienceShared/Post';
import ProfileInfo from '../../shared/global/ProfileInfo';
function Home() {
  return (
    <React.Fragment>
      <ExperienceNavbar />
      <div className="absolute top-20 w-full">
        <ProfileInfo />
      </div>
      <div className="justify-center items-center">
        <Post />
      </div>
    </React.Fragment>
  );
}

export default Home;
