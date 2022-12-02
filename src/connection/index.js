import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://root:root@myclusternode.nwn9cuz.mongodb.net/node"
);

const db = mongoose.connection;

export default db;
