import Video from "../models/Video.js";

export const home = async (req, res) => {
    console.log("Starting Search");
    Video.find().then((models) => {
        console.log("Finished Search");
    }).catch((error) => {
        console.log(error);
    });
    console.log("I should be the last one");
    return res.render("home", { pageTitle: "Home", videos: [] });
};

export const watch = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: "Watching" });
};

export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: "Editing" });
};

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("Upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
    const { title } = req.body;
    return res.redirect("/");
};