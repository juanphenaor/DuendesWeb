// Servicio centralizado para consumo de API REST y manejo de tokens

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function joinUrl(base, endpoint) {
  if (!base) return endpoint;
  if (!endpoint) return base;
  // Elimina slash final de base y slash inicial de endpoint
  return base.replace(/\/+$/, '') + '/' + endpoint.replace(/^\/+/, '');
}

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

// Permite setear un callback global para manejar 401
let onUnauthorized = null;
export function setOnUnauthorized(cb) {
  onUnauthorized = cb;
}

async function request(endpoint, options = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  const url = joinUrl(API_BASE_URL, endpoint);
  const response = await fetch(url, {
    ...options,
    headers,
  });
  if (response.status === 401 && typeof onUnauthorized === 'function') {
    onUnauthorized();
    // Opcional: podrías lanzar un error o retornar null
    return { success: false, error: 'Unauthorized' };
  }
  const data = await response.json();
  return data;
}

const apiService = {
  getToken,
  getRefreshToken,
  setTokens,
  clearTokens,
  request,
  setOnUnauthorized,
};
export default apiService;
