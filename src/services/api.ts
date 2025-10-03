import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Issue related API calls
export const issueAPI = {
  // Get all issues
  getAllIssues: async () => {
    const response = await api.get('/issues');
    return response.data;
  },

  // Get single issue by ID
  getIssueById: async (id: string) => {
    const response = await api.get(`/issues/${id}`);
    return response.data;
  },

  // Create new issue
  createIssue: async (issueData: any) => {
    const response = await api.post('/issues', issueData);
    return response.data;
  },
};

// Auth related API calls
export const authAPI = {
  // Login
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  // Register
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
};

export default api;