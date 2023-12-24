export function getToken() {
    return localStorage.getItem('token');
}

export function setToken(res) {
    localStorage.setItem('token', res.token);
}

export function removeToken() {
    localStorage.removeItem('token');
}
