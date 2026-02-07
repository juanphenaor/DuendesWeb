// Servicio de autenticación: login, logout, refresh, almacenamiento de tokens
import apiService from '../services/apiService';

const LOGIN_ENDPOINT = '/Users/Login';
const REFRESH_ENDPOINT = '/auth/refresh';

async function login(email, password) {
  const response = await apiService.request(LOGIN_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (response.success && response.data) {
    apiService.setTokens(response.data.token, response.data.refreshToken);
  }
  return response;
}

async function refreshToken() {
  const refreshToken = apiService.getRefreshToken();
  if (!refreshToken) return null;
  const response = await apiService.request(REFRESH_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ refreshToken }),
  });
  if (response.success && response.data) {
    apiService.setTokens(response.data.token, response.data.refreshToken);
  } else {
    apiService.clearTokens();
  }
  return response;
}

function logout() {
  apiService.clearTokens();
}

export default {
  login,
  refreshToken,
  logout,
};
