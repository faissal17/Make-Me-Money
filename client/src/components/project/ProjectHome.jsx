import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../../Api/projectApi';
import ExperienceNavbar from '../../shared/global/ExperienceNavbar';
import { Link } from 'react-router-dom';

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

  const handleContributeClick = (project) => {
    const emailSubject = `Contributing in project ${project.name}`;
    const emailBody = `Write your message here...`;
    const mailtoLink = `mailto:${
      project.user.email
    }?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
      emailBody,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <React.Fragment>
      <ExperienceNavbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {projects.length === 0 ? (
          <div className="flex justify-center items-center">
            <h1 className="text-black font-bold text-2xl">
              There is no project here
            </h1>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl overflow-hidden flex flex-col max-w-xl mx-auto"
            >
              <img
                className="w-full h-96 object-cover"
                src={project.image}
                alt="random image"
              />
              <div className="relative px-4 -mt-16 m-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between">
                    <span className="bg-teal-200 text-md px-3 inline-block rounded-full uppercase font-semibold tracking-wide">
                      {project.user.name}
                    </span>
                    <div className="bg-blue-400 text-md px-3 inline-block rounded-full uppercase font-semibold tracking-wide">
                      {project.status}
                    </div>
                  </div>
                  <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                    <Link
                      to={{
                        pathname: `/Project/${project._id}`,
                        state: { project },
                      }}
                      className="font-semibold text-lg hover:text-indigo-600
             transition duration-500 ease-in-out inline-block mb-2"
                    >
                      {project.name}
                    </Link>{' '}
                  </h4>
                  <div className="mt-1 truncate">{project.description}</div>
                  <div className="flex justify-between">
                    <div className="mt-1 bg-teal-200 text-teal-800 text-md px-2 inline-block rounded-full font-semibold tracking-wide">
                      {project.montant}$
                    </div>
                    <button
                      className="mt-1 bg-purple-200 text-purple-800 text-md px-2 inline-block rounded-full font-semibold tracking-wide"
                      onClick={() => handleContributeClick(project)}
                    >
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default ProjectHome;
