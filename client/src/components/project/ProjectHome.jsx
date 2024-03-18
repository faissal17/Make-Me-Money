import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../../Api/projectApi';
import ExperienceNavbar from '../../shared/global/ExperienceNavbar';

function ProjectHome() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    getAllProjects()
      .then((response) => {
        setProject(response);
        console.log('projects data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <React.Fragment>
      <ExperienceNavbar />
    </React.Fragment>
  );
}

export default ProjectHome;
