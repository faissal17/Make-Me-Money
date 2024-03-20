import React, { useState } from 'react';
import { createProbleme } from '../../Api/probleme.api';
import { useParams } from 'react-router-dom';

function CreateProblemeModel() {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState([]);
  const [formData, setFormData] = useState({
    _id: id,
    name: '',
    description: '',
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
    if (value === '') {
      setFormData((prevData) => ({ ...prevData, tags: [] }));
    } else {
      setFormData((prevData) => ({ ...prevData, tags: value.split(',') }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please select image');
      return;
    }

    const formDataa = new FormData();
    formDataa.append('name', formData.name);
    formDataa.append('description', formData.description);
    formDataa.append('image', image);
    formDataa.append('website', formData.website);
    formDataa.append('feedback', formData.feedback);
    formDataa.append('status', formData.status);
    formDataa.append('tags', formData.tags.join(','));

    try {
      const response = await createProbleme(formDataa);
      console.log('Probleme created successfully:', response);
      toggleModal();
    } catch (error) {
      console.error('Error creating Probleme:', error);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 -mt-24">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Create New Probleme
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

export default CreateProblemeModel;
