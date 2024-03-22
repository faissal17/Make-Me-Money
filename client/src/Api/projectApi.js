import axois from 'axios';

const projectApi = axois.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: true,
});

export const getAllProjects = async () => {
  try {
    const response = await projectApi.get('project');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};
export const getUserProject = async (userId) => {
  try {
    const response = await projectApi.get(`project/current/${userId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};
export const createProject = async (ProjectData) => {
  try {
    const response = await projectApi.post('project', ProjectData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};

export const deleteProject = async (ProjectId) => {
  try {
    const response = await projectApi.delete(`project/${ProjectId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('failed to fetch');
    }
  } catch (error) {
    console.error('Error frtching in:', error);
    throw error;
  }
};

export const updateProject = async (ProjectId, ProjectData) => {
  try {
    const response = await projectApi.put(`project/${ProjectId}`, ProjectData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to update');
    }
  } catch (error) {
    console.error('Error updating experience:', error);
    throw error;
  }
};

export const getProjectById = async (ProjectId) => {
  try {
    const response = await projectApi.get(`project/${ProjectId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to update');
    }
  } catch (error) {
    console.error('Error updating experience:', error);
    throw error;
  }
};
