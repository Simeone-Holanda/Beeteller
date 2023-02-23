// url api
export const api = process.env.REACT_APP_URL_BACKEND;

// Function to make request in rest server
export const requestConfig = (method, data, token = null) => {
  let config;

  if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    //config.headers.Authorization = `Bearer ${token}`;
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
