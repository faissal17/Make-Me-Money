import React, { useState } from 'react';
import { updateProject } from '../../Api/projectApi';
import Swal from 'sweetalert2';

function UpdateProjectModel({ projectId }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState(null); // State to store the selected image
  const [formData, setFormData] = useState({
    _id: projectId,
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataa = new FormData();
    formDataa.append('name', formData.name);
    formDataa.append('description', formData.description);
    formDataa.append('montant', formData.montant);
    formDataa.append('status', formData.status);

    if (image) {
      formDataa.append('image', image);
    }

    try {
      const response = await updateProject(projectId, formDataa);
      console.log(response);
      Swal.fire('Success!', 'Project has been updated.', 'success');
    } catch (error) {
      console.error('Error updating project:', error);
      Swal.fire('Error', 'Failed to update the project.', 'error');
    }
  };

  return (
    <div className="w-auto px-1">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Update
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Update project</h2>
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
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
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
                  Montant
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateProjectModel;
