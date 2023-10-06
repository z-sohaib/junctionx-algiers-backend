const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const isValidPassword = passwordRegex.test(password);
  return isValidPassword;
};

const validateTelephone = (telephone) => {
  const telephoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const isValidTelephone = telephoneRegex.test(telephone);
  return isValidTelephone;
};

export const validateUser = ({ telephone, email, password }) => {
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);
  const isValidTelephone = validateTelephone(telephone);

  return isValidEmail && isValidTelephone && isValidPassword;
};

export const validateUserLogin = ({ email, password }) => {
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);

  return isValidEmail && isValidPassword;
};
