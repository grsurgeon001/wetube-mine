import Model from "../models/Model";

export const login  = (req, res) => {
    return res.render("login", { pageTitle: "Login Page" });
};
