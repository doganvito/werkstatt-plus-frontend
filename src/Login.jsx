import { API_URL } from "./api";

function login(data) {
  fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  username: email,
  password: password
});

}

export default login;


