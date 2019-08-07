module.exports = {
  validateTopics(req, res, next) {
    if (req.method === "POST") {
      // req
      //   .checkParams("topicId", "must be valid (validateTopics)")
      //   .notEmpty()
      //   .isInt();

      req
        .checkBody(
          "title",
          "must be at least 5 characters in length (validateTopics)"
        )
        .isLength({ min: 5 });
      req
        .checkBody(
          "description",
          "must be at least 10 characters in length (validateTopics)"
        )
        .isLength({ min: 10 });
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash("error", errors);
      return res.redirect(303, req.headers.referer);
    } else {
      return next();
    }
  },

  validatePosts(req, res, next) {
    if (req.method === "POST") {
      req
        .checkParams("topicId", "must be valid (validatePosts)")
        .notEmpty()
        .isInt();
      req
        .checkBody(
          "title",
          "must be at least 2 characters in length (validatePosts)"
        )
        .isLength({ min: 2 });
      req
        .checkBody(
          "body",
          "must be at least 10 characters in length (validatePosts)"
        )
        .isLength({ min: 10 });
    }

    const errors = req.validationErrors();

    if (errors) {
      req.flash("error", errors);
      return res.redirect(303, req.headers.referer);
    } else {
      return next();
    }
  }
};
