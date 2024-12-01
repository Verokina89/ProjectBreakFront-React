//funcions paera validar mail y password
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
  
export const validatePassword = (password) => {
return password.length >= 6;
};
  