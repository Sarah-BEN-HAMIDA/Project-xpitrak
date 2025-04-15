import axios from "axios";

// You can set your backend base URL here
const API_BASE_URL = "http://localhost:5000/api"; // or from .env

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// AUTH
export const login = (credentials) => api.post("/auth/login", credentials);
export const register = (userData) => api.post("/auth/register", userData);

// EMPLOYEES
export const fetchEmployees = () => api.get("/employees");
export const addEmployee = (employeeData) =>
  api.post("/employees", employeeData);
export const updateEmployee = (id, updatedData) =>
  api.put(`/employees/${id}`, updatedData);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

// PRODUCTS / STOCK
export const fetchProducts = () => api.get("/products");
export const addProduct = (data) => api.post("/products", data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// REPORTS
export const getReports = () => api.get("/reports");

// EXPORT the Axios instance if needed directly
export default api;
