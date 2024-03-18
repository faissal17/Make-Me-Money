import React, { useState, useEffect } from 'react';
import { createProject } from '../../Api/projectApi';
import { useParams } from 'react-router-dom';
function CreateProjectModel() {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    _id: id,
    name: '',
    description: '',
    image: null,
    montant: '',
    status: '',
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, tags: value.split(',') }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createProject(formData)
      .then((response) => {
        console.log('project created successfully:', response);
        toggleModal();
      })
      .catch((error) => {
        console.error('Error creating project:', error);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 -mt-24">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Create New project
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Create New Probleme</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                className="border rounded w-full py-2 px-3"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="To Do">To Do</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </select>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="montant"
                >
                  montant
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="number"
                  id="montant"
                  name="montant"
                  value={formData.montant}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProjectModel;
