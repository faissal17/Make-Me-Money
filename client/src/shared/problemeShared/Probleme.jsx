import React, { useState, useEffect } from 'react';
import { getUserProbleme } from '../../Api/probleme.api';
import CreateProblemeModel from './CreateProblemeModel';
import UpdateProblemeModel from './UpdateProblemeModel';
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
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {create && (
        <div className="flex justify-center items-center">
          <CreateProblemeModel />
        </div>
      )}
      {problems.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-black font-bold text-2xl">
            You haven't create any Probleme yet
          </h1>
        </div>
      ) : (
        problems.map((probleme) => (
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
                {button && (
                  <div className="flex mt-4">
                    <UpdateProblemeModel problemeId={probleme._id} />
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
        ))
      )}
    </div>
  );
}
export default Probleme;
