import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../../Api/projectApi';
function ProjectInfo() {
  const { id } = useParams();
  console.log(id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id)
      .then((response) => {
        if (response.message && typeof response.message === 'object') {
          setProject(response.message);
          console.log('Project data:', response.message);
        } else {
          console.error('Invalid response data:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <address className="flex items-center justify-center mb-6 not-italic">
        <div className="inline-flex items-center justify-center mr-3 text-sm text-gray-900">
          <img
            className="mr-4 w-16 h-16 rounded-full"
            src={project?.user.image}
            alt="Jese Leos"
          />
          <div>
            <a
              href="#"
              rel="author"
              className="text-xl font-bold text-gray-900"
            >
              {project?.user.name}
            </a>
            <p className="text-base text-gray-500 dark:text-gray-400">
              {project?.user.email}
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              <time> {project?.date}</time>
            </p>
          </div>
        </div>
      </address>
      {project && (
        <div>
          <div
            className="bg-cover h-64 text-center overflow-hidden rounded-3xl"
            style={{
              height: '500px',
              backgroundImage: `url('${project.image}')`,
            }}
          ></div>
          <div className="max-w-2xl mx-auto">
            <div className="-mt-24 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-10">
              <div>
                <h1 className="text-gray-900 font-bold text-3xl mb-2">
                  {project.name}
                </h1>
                <p className="text-base leading-8 my-5">
                  {project.description}
                </p>
                <p className="text-base leading-8 my-5">
                  <strong>Paying:</strong> {project.montant}$
                </p>

                <p className="text-base leading-8 my-5">
                  <strong>Status:</strong> {project.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectInfo;
