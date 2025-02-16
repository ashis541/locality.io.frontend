import axios from "axios";
const baseUrl = "http://localhost:8000/api/v1/";

class Mainapi {
    constructor() {
        this.api = axios.create({
            baseURL: baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    getToken() {
        return localStorage.getItem("token");
    }

    async loginServices(credentials) {
        try {
            const response = await this.api.post("users/login", credentials);
            
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }

            return response.data;
        } catch (error) {
            console.error("Login failed:", error.response?.data || error.message);
            throw error;
        }
    }

    async logoutServices() {
        try {
            const response = await this.api.post(
                "logout",
                {},
                { headers: { Authorization: `Bearer ${this.getToken()}` } }
            );

            localStorage.removeItem("token"); 
            return response.data;
        } catch (error) {
            console.error("Logout failed:", error.response?.data || error.message);
            throw error;
        }
    }

    async getAllBranch() {
        try {
            const response = await this.api.get("branches", {
                headers: { Authorization: `Bearer ${this.getToken()}` },
            });

            return response.data;
        } catch (error) {
            console.error("Fetching branches failed:", error.response?.data || error.message);
            throw error;
        }
    }
}

export default new Mainapi(); // Export a single instance for easier use
