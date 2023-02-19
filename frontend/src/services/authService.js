import { api, requestConfig } from "../utils/config";

// Logout an user
const logout = () => {
    localStorage.removeItem("user");
};

// Sign in an user
const login = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(`${api}/account/login`, config)
        let data = await res.json()
        data.statusCode = res.status

        if (data.token) {
            localStorage.setItem("token", JSON.stringify(data.token));
        }
        return data;
    } catch (error) {
        console.log(error);
    }
};

const authService = {
    logout,
    login,
};

export default authService;