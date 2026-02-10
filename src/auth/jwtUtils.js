// Utilidad para decodificar JWT y extraer claims relevantes
import { jwtDecode } from 'jwt-decode';

export function getDecodedToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
}

export function getUserEmail() {
  const decoded = getDecodedToken();
  // Claim .NET para email
  return (
    decoded?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] ||
    decoded?.['email'] ||
    null
  );
}

export function getUserRoles() {
  const decoded = getDecodedToken();
  // Claim .NET para rol
  const roleClaim = decoded?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || decoded?.['role'];
  if (!roleClaim) return [];
  if (Array.isArray(roleClaim)) return roleClaim;
  return [roleClaim];
}

// Ejemplo de uso:
// const email = getUserEmail();
// const roles = getUserRoles();
