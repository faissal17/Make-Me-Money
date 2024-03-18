import ExperienceNavbar from '../../shared/global/ExperienceNavbar';
import React, { useEffect, useState } from 'react';
import { getAllprobleme } from '../../Api/probleme.api';
import ProfileInfo from '../../shared/global/ProfileInfo';

function ProblemeHome() {
  const [problems, setProbleme] = useState([]);

  useEffect(() => {
    getAllprobleme()
      .then((response) => {
        setProbleme(response);
        console.log('probleme data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <React.Fragment>
      <ExperienceNavbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        {problems.map((probleme) => (
          <div
            key={probleme._id}
            className="rounded-2xl overflow-hidden flex flex-col max-w-xl mx-auto"
          >
            <img
              className="w-full h-96 object-cover"
              src={probleme.image}
              alt=" random imgee"
            />
            <div className="relative px-4 -mt-16 m-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between">
                  <span className="bg-teal-200 text-md px-3 inline-block rounded-full uppercase font-semibold tracking-wide">
                    {probleme.user.name}
                  </span>
                  <div className="bg-red-400 text-md px-3 inline-block rounded-full uppercase font-semibold tracking-wide">
                    {probleme.status}
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  {probleme.name}
                </h4>

                <div className="mt-1 truncate">{probleme.description}</div>
                <div className="mt-1 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full font-semibold tracking-wide">
                  {probleme.website}
                </div>
                <div className="mt-4">
                  <span className="text-gray-600 text-md font-semibold">
                    {probleme.tags.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="mt-1">{probleme.feedback}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ProblemeHome;
