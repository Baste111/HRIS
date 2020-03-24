import jwtDecoder from "jwt-decode";

const tokenKey = "id_token";

const tokenService = {
    insert(token) {
        window.localStorage.setItem(tokenKey, token);
    },

    get() {
        return window.localStorage.getItem(tokenKey)
            ? window.localStorage.getItem(tokenKey)
            : null;
    },

    remove() {
        window.localStorage.removeItem(tokenKey);
    },

    getDecodedToken() {
        const token = this.get();
        if (token !== null) return jwtDecoder(token);
        return {
            username: "",
            password: "",
            type: {
                id: 0,
                name: ""
            },
            profile: {
                firstName: "",
                middleName: "",
                lastName: "",
                photoUrl: ""
            }
        };
    }
};

export default tokenService;