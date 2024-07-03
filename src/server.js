import express from "express";

const PORT = 4000;

// // Creates An Express Application
const app = express();

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };

// const privateMiddleware = (req, res, next) => {
//     const url = req.url;
//     if (url === "/protected") {
//         return res.send("<h1>Not Allowed</h1>");
//     }
//     console.log("Allowed, you may continue.");
//     next();
// };

const handleHome = (req, res) => {
    return res.send("I love middlewares.");
};

const urlLogger = (req, res, next) => {
    console.log(`Path: ${req.path}`);
    next();
};

const timeLogger = (req, res, next) => {
    const today = new Date("July 3, 2024 10:08:00");
    console.log(`Time: ${today.getFullYear()}.${today.getMonth()}.${today.getDate()}`);
    next();
};

const securityLogger = (req, res, next) => {
    if (req.protocol === "http") {
        console.log("Insecure");
    }
    if (req.protocol === "httpss") {
        console.log("Secure")
    }
    next();
};

const protectorMiddleware = (req, res, next) => {
    if (req.path === "/protected") {
        console.log("You can not access '/protected' page");
        res.redirect("http://localhost:4000");
    }
    next();
};

app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);

// const handleProtected = (req, res) => {
//     return res.send("Welcome to the priavet lounge.");
// };

// // Make a global Middleware
// app.use(logger);
// app.use(privateMiddleware);

app.get("/", handleHome);
// app.get("/protected", handleProtected)

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

