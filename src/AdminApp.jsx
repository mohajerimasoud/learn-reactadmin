import React from "react";
import { Admin, Resource } from "react-admin";
import { authProvider } from "./Pages/AuthProvider/AuthProvider";

const fetchMessages = fetch(
  "https://lawone.vaslapp.com/api/v2/inbox?pageNumber=0&pageSize=10&sortKey=createdDate&sort=DESC",
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9,fa;q=0.8",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "cache-control": "no-cache",
      crossdomain: "true",
      lang: "fa",
      pragma: "no-cache",
      "sec-ch-ua":
        '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://lawone-paneladmin.vaslapp.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  }
);

const AdminApp = () => {
  return (
    <Admin dataProvider={fetchMessages} authProvider={authProvider}>
      <Resource name="System messages" />
    </Admin>
  );
};

export default AdminApp;
