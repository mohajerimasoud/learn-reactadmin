import axios from "axios";

export const handleLogin = ({ username, password }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  // const baseUrl = `https://lawone.vaslapp.com`;
  console.log("handleLogin", baseUrl, process.env.REACT_APP_BASE_URL);
  const params = new URLSearchParams();
  params.append("grant_type", "password");
  params.append("username", username);
  params.append("password", password);

  const login = new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}/oauth/token`, params, {
        headers: {
          Authorization: "Basic c2FtcGxlQ2xpZW50OnNhbXBsZVNlY3JldA==",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept-Language": "fa",
        },
      })
      .then((response) => {
        const { access_token, refresh_token } = response.data;

        if (access_token && refresh_token) {
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);
          resolve(true);
        } else {
          reject(false);
        }
      });
  });
  return login;
};
