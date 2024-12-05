const express = require("express");
const RemoteADB = require("remote-adb");
const net = require("net");


const app = express();
const port = process.env.PORT || 3000;

// Example usage of remote-adb
app.get("/", async (req, res) =>  {
  try {
    await new RemoteADB.Server({port:8888}).start();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });