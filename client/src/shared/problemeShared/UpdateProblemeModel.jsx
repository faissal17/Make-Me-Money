import React, { useState } from 'react';
import { updateProbleme } from '../../Api/probleme.api';
import Swal from 'sweetalert2';
function UpdateProblemeModel({ problemeId }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    _id: problemeId,
    name: '',
    description: '',
    image: null,
    website: '',
    feedback: '',
    status: '',
    tags: [],
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

  const handleSubmit = async (e) => {
    console.log('first');
    e.preventDefault();
    try {
      const response = await updateProbleme(problemeId, formData);
      console.log(response);

      Swal.fire('Success!', 'probleme has been updated.', 'success');
    } catch (error) {
      console.error('Error updating probleme:', error);
      Swal.fire('Error', 'Failed to update the probleme.', 'error');
    }
  };
  return (
    <div className="w-auto px-1">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        update
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">update Probleme </h2>
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
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="website"
                >
                  Website
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="feedback"
                >
                  feedback
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
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
                <option value="it-can-wait">it can wait</option>
                <option value="urgent">urgent</option>
                <option value="dangerous">dangerous</option>
              </select>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tags"
                >
                  Tags (comma-separated)
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags.join(',')}
                  onChange={handleTagChange}
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

export default UpdateProblemeModel;
