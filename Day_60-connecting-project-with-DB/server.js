const app = require("./src/app");
const connectDb = require("./src/config/db");

const port = 3000;
connectDb();
app.listen(port, () => {
  console.log("i'm listening on port 3000");
});
