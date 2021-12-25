const router = require("express").Router();
// const bookRoutes = require("./books");
const userRoutes = require("./users");
const profileRoutes = require("./profile");
const homeRoutes = require("./home");
const auth = require("./auth");

var express = require("express");
var app = express.Router();

// Book routes
// app.use("/books", bookRoutes);

// User routes
app.use("/users", userRoutes);

// Profile routes
app.use("/profile", profileRoutes);

// Home routes
app.use("/home", homeRoutes);

app.use("/auth", auth);

module.exports = app;
