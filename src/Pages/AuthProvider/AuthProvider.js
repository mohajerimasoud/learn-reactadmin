import { handleLogin } from "./Login";

const authProvider = {
  // send username and password to the auth server and get back credentials
  login: (params) => {
    console.log("login params", params);

    return handleLogin(params);
  },
  // when the dataProvider returns an error, check if this is an authentication error
  checkError: (error) => Promise.resolve(),
  // when the user navigates, make sure that their credentials are still valid
  checkAuth: (params) => {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  },
  // remove local credentials and notify the auth server that the user logged out
  logout: () => Promise.resolve(),
  // get the user's profile
  getIdentity: () => Promise.resolve(),
  // get the user permissions (optional)
  getPermissions: () => Promise.resolve(),
};

export { authProvider };
