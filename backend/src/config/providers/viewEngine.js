import path from "node:path";
import expressLayouts from "express-ejs-layouts";

const viewEngine = (app, express) => {
  // Set view engine to EJS
  app.set("view engine", "ejs");
  app.set("views", path.join("./src", "views"));

  // Middleware phục vụ tệp tĩnh
  app.use(express.static(path.join("./src", "public")));
  app.use(expressLayouts);  
};

export default viewEngine;
