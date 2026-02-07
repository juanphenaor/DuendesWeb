// Servicio centralizado para consumo de API REST y manejo de tokens
const API_BASE_URL = "https://duendesrcapi-b5agddevhkcrgfa3.canadacentral-01.azurewebsites.net/api";

function getToken() {
  return localStorage.getItem("token");
}

function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

function setTokens(token, refreshToken) {
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
}

function clearTokens() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
}

async function request(endpoint, options = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });
  const data = await response.json();
  return data;
}

export default {
  getToken,
  getRefreshToken,
  setTokens,
  clearTokens,
  request,
};
