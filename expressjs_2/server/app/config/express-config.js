const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("@/logger")("app");

exports.setup = function (app) {
  logger.info("Setup express-config");
  // view engine setup
  app.set("views", path.join(__dirname, "../_views"));
  app.set("view engine", "ejs");

  // app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "../_public")));
};

