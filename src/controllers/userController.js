import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Create Account" });
};

export const postJoin = async (req, res) => {
    const { name, username, email, password, password2, location } = req.body;
    const pageTitle = "Join";

    // Password Check
    if (password !== password2) {
        return res.status(400).render("join", { 
            pageTitle,
            errorMessage: "Password confirmation does not match.", 
        });
    }

    const exists = await User.exists({ $or : [{ username: req.body.username }, { email: req.body.email }] });
    if (exists) {
        return res.status(400).render("join", { 
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

    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
        return res.redirect("/login");
    } catch (error) {
        return res.status(400).render("johin", {
            pageTitle: "Join",
            errorMessage: error._message,
        });
    }
};

export const getLogin = (req, res) => res.render("login", {
    pageTitle: "Login",
});

export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const exists = await User.exists({ username });
    if (!exists) {
        return res.status(400).render("login", {
            pageTitle: "Login",
            errorMessage: "An account with this username does not exists",
        })
    }
    // Check if account exists

    // Check if password correct
    res.end();
};

export const remove = (req, res) => res.send("Remove");
export const edit = (req, res) => res.send("edit");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");