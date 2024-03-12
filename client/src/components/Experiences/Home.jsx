import React from 'react';
import ExperienceNavbar from '../../shared/ExperienceShared/ExperienceNavbar';
import Post from '../../shared/ExperienceShared/Post';
import ProfileInfo from '../../shared/ExperienceShared/ProfileInfo';
function Home() {
  return (
    <React.Fragment>
      <ExperienceNavbar />
      <div className="flex justify-start">
        <ProfileInfo />
        <div className="flex justify-center items-center">
          <Post />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
