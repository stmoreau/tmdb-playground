const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/.netlify/functions/", {
      target: "http://localhost:3001/",
      pathRewrite: {
        "^/\\.netlify/functions": ""
      }
    })
  );
};
