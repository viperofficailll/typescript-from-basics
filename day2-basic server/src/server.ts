import { app } from "./app";
import path from "path";
import { config } from "dotenv";
config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.PORT;

console.log(port);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
