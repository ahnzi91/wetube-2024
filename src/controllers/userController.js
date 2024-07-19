import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Create Account" });
};

export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location } = req.body;
    const pageTitle = "Join";

    // Password Check
    if (password !== password2) {
        return res.render("join", { 
            pageTitle,
            errorMessage: "Password confirmation does not match.", 
        });
    }

    const exists = await User.exists({ $or : [{ username: req.body.username }, { email: req.body.email }] });
    if (exists) {
        return res.render("join", { 
            pageTitle,
            errorMessage: "This username/email is already taken.", 
        });
    }
    
    // const emailExists = await User.exists({ email });
    // if (emailExists) {
    //     return res.render("join", { 
    //         pageTitle, 
    //         errorMessage: "This email is already taken.", 
    //     });
    // }

    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
};

export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("Remove");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");