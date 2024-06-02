import axios from 'axios';

const API_BASE_URL = 'https://wd79p.com/backend/public/api/companies';

export const getCompanies = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const getCompany = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching company:', error);
    throw error;
  }
};

export const createCompany = async (companyData) => {
  try {
    const response = await axios.post(API_BASE_URL, companyData);
    return response.data;
  } catch (error) {
    console.error('Error creating company:', error);
    throw error;
  }
};

export const updateCompany = async (id, companyData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, companyData);
    return response.data;
  } catch (error) {
    console.error('Error updating company:', error);
    throw error;
  }
};

export const deleteCompany = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting company:', error);
    throw error;
  }
};
