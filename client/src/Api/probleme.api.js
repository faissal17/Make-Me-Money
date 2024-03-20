import axois from 'axios';

const problemeApi = axois.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: true,
});

export const getAllprobleme = async () => {
  try {
    const response = await problemeApi.get('probleme');
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

export const getUserProbleme = async (userId) => {
  try {
    const response = await problemeApi.get(`probleme/current/${userId}`);
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

export const createProbleme = async (problemeData) => {
  try {
    const response = await problemeApi.post('probleme', problemeData, {
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

export const deleteProbleme = async (problemeId) => {
  try {
    const response = await problemeApi.delete(`probleme/${problemeId}`);
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

export const updateProbleme = async (problemeId, problemeData) => {
  try {
    const response = await problemeApi.put(
      `probleme/${problemeId}`,
      problemeData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
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
