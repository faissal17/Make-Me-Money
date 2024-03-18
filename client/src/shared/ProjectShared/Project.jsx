import React, { useState, useEffect } from 'react';
import { getUserProject, deleteProject } from '../../Api/projectApi';
import UpdateProjectModel from './UpdateProjectModel';
import CreateProjectModel from './CreateProjectModel';

function Project({ create, button }) {
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

  const handleDelete = async (ProjectId) => {
    try {
      const response = await deleteProject(ProjectId);
      console.log(response);
      if (response) {
        setProbleme((pervProject) =>
          pervProject.filter((ProjectId) => ProjectId._id !== ProjectId),
        );
        Swal.fire('Deleted!', 'project has been deleted.', 'success');
      } else {
        Swal.fire('Error', 'Failed to delete the project.', 'error');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      Swal.fire(
        'Error',
        'An error occurred while deleting the project.',
        'error',
      );
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {create && (
        <div className="flex justify-center items-center">
          <CreateProjectModel />
        </div>
      )}
      {projects.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-black font-bold text-2xl">
            You haven't create any project yet
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
                  <div className="bg-red-400 text-md px-3 inline-block rounded-full uppercase font-semibold tracking-wide">
                    {project.status}
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  {project.name}
                </h4>
                <div className="mt-1 truncate">{project.description}</div>
                <div className="mt-1 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full font-semibold tracking-wide">
                  {project.montant}
                </div>
              </div>
              {button && (
                <div className="flex mt-4">
                  <UpdateProjectModel projectId={project._id} />
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Project;
