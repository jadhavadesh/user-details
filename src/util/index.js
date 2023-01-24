export const getTokenInLs = () => {
    return localStorage.getItem("token");
};

export const setTokenInLs = (token) => {
    localStorage.setItem("token", token);
};