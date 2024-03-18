import React, { useState, useEffect } from 'react';
import { getUserProject } from '../../Api/projectApi';

function Project() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    getUserProject()
      .then((response) => {
        setProject(response);
        console.log('projects data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return <div>Project</div>;
}

export default Project;