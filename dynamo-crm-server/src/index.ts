import https from "https";
import app from "./app";
import { connectToDb } from "./utils/db";

const server = https.createServer(app);
const PORT = process.env.PORT || 4000;
const startApp = async () => {
  await connectToDb();
  server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
};

startApp();
