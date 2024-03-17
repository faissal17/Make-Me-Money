import React, { useState, useEffect } from 'react';
import { getUserProbleme } from '../../Api/probleme.api';
import CreateProblemeModel from './CreateProblemeModel';
import { deleteProbleme } from '../../Api/probleme.api';
import Swal from 'sweetalert2';
function Probleme({ button, create }) {
  const [problems, setProbleme] = useState([]);

  useEffect(() => {
    getUserProbleme()
      .then((response) => {
        setProbleme(response);
        console.log('problems data:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = async (problemeId) => {
    try {
      const response = await deleteProbleme(problemeId);
      console.log(response);
      if (response) {
        setProbleme((pervProbleme) =>
          pervProbleme.filter((problemeId) => problemeId._id !== problemeId),
        );
        Swal.fire('Deleted!', 'probleme has been deleted.', 'success');
      } else {
        Swal.fire('Error', 'Failed to delete the probleme.', 'error');
      }
    } catch (error) {
      console.error('Error deleting probleme:', error);
      Swal.fire(
        'Error',
        'An error occurred while deleting the probleme.',
        'error',
      );
    }
  };
  return (
    <React.Fragment>
      <div>
        {create && (
          <div className="flex justify-center items-center mt-16">
            <CreateProblemeModel />
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-around p-5 sm:p-10 md:p-16">
        {problems.map((probleme) => (
          <div key={probleme._id}>
            <img
              className="w-full h-96 object-cover"
              src={probleme.image}
              alt=" random imgee"
            />

            <div className="relative px-4 -mt-16">
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

                <div className="mt-1">{probleme.description}</div>
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
                {button && (
                  <div className="flex mt-4 justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      update
                    </button>
                    <button
                      onClick={() => handleDelete(probleme._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Probleme;
