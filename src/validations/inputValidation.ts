export const validateUser = ({ name, telephone, email, password }) => {
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);
  const isValidTelephone = validateTelephone(telephone);
  const isValidName = validateName(name);

  return isValidName && isValidEmail && isValidTelephone && isValidPassword;
};

export const validateUserLogin = ({ email, password }) => {
  const isValidPassword = validatePassword(password);
  const isValidEmail = validateEmail(email);

  return isValidEmail && isValidPassword;
};

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

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z]{3,}$/;
  const isValidName = nameRegex.test(name);
  return isValidName;
};
