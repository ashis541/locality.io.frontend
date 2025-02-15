const baseUrl = 'http://localhost:3000/api/v1/';

class Mainapi {
    getToken() {
        return localStorage.getItem('token'); // Retrieve token dynamically
    }

    async loginServices(credentials) {
        try {
            const response = await fetch(`${baseUrl}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token); // Store token globally
            }

            return data;
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    async logoutServices() {
        try {
            const response = await fetch(`${baseUrl}logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getToken()}`,
                },
            });

            localStorage.removeItem('token'); // Remove token on logout
            return await response.json();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    async getAllBranch() {
        try {
            const response = await fetch(`${baseUrl}branches`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getToken()}`,
                },
            });
            return await response.json();
        } catch (error) {
            console.error('Fetching branches failed:', error);
        }
    }
}

// Export the class without instantiating it
export default Mainapi;
